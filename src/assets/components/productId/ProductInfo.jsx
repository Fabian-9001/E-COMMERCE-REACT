import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../../utils/getConfig'

const ProductInfo = ({ product }) => {

    const [counter, setCounter] = useState(1)

    
    const handleMinus = () => {
        if (counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }


    const handlePlus = () => {
        setCounter(counter + 1)
    }


    const handleAddCart = () => {

        const data = {
            id: product.id,
            quantity: counter
        }

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.post(URL, data, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <article className='product__info'>
            <h2 className='product__info__title'>{product?.title}</h2>
            <p className='product__info__description'>{product?.description}</p>
            <footer className='product__info__footer'>
                <div className='product__info__subContainer'>
                    <h3>Price</h3>
                    <span >{product?.price}</span>
                </div>
                <div className='product__info__subcontainer'>
                    <h3>Quantity</h3>
                    <div className='product__info__counter'>
                        <button onClick={handleMinus} className='counter__info__btnMinus'>-</button>
                        <p className='product__info__text'>{counter}</p>
                        <button onClick={handlePlus} className='product__info__btnplus'>+</button>
                    </div>
                </div>
                <button onClick={handleAddCart}>
                    Add to Cart
                </button>
            </footer>
        </article>
    )
}

export default ProductInfo