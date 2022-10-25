import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../../store/slices/cart.slice'
import getConfig from '../../../utils/getConfig'
import './styles/Home.css'

const CartProduct = ({ product }) => {
    console.log(product)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleNavigation = id => {
        navigate(`/product/${product.id}`)
    }

    const handleaddCart = e => {
        e.stopPropagation()

        const data = {
            id: product.id,
            quantity: 1
        }

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductsCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <article onClick={handleNavigation} className='card__product'>
            <header className='card__header'>
                <img className='card__img__product' src={product.productImgs[0]} alt="" />
            </header>
            <div className='card__body'>
                <p className='card__category'>{product.category.name}</p>
                <h3 className='card__name'>{product.title}</h3>
                <div className='card__subContainer'>
                    <span className='card__price__title'>Price</span>
                    <p className='card__price'>{product.price}</p>
                </div>
                <div className='card__subContainer'>
                    <button onClick={handleaddCart} className='card__button'>
                        <img className='card__img__cart' src="img/carrito de compras.gif" alt="" />
                        AGREGAR
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CartProduct