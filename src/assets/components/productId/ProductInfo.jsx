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
            <header>
                <h2 className='product__info__title'>{product?.title}</h2>
            </header>

            <article className='product__imgs'>
                <section className='product__thumnails__img'>
                    <img className='product__thumbnail__img' src="img/instagram.png" alt="" />
                    <img className='product__thumbnail__img' src="img/instagram.png" alt="" />
                    <img className='product__thumbnail__img' src="img/instagram.png" alt="" />
                </section>
                <section className='products__img_principal'>
                    <img className='product__thumbnail__principal' src="img/facebook.png" alt="" />
                </section>
            </article>

            <div className='product__info__body'>

                <div className='product__info__subContainer'>
                    <span >{product?.price}</span>
                </div>

                <div className='product__info__subcontainer'>
                    <div className='product__info__counter'>
                        <p className='product__info__text'>{counter}</p>
                        <div className='product__info__counterBtns'>
                            <button onClick={handlePlus} className='product__info__btnplus'>+</button>
                            <button onClick={handleMinus} className='counter__info__btnMinus'>-</button>
                        </div>
                    </div>
                    <button onClick={handleAddCart}>
                        Add to Cart
                    </button>
                </div>

            </div>

            <div>
                <p className='product__info__description'>{product?.description}</p>
            </div>

        </article>
    )
}

export default ProductInfo