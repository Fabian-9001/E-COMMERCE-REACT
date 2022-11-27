import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../../store/slices/Products.slice'

const FilterCategory = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleFetchCategory = id => {
        if (id) {
            dispatch(getProductByCategory(id))
        } else {
            dispatch(getAllProducts())
        }
    }

    return (
        <div className='categories'>
            <ul className='categories__list'>
                <li className='category__item' onClick={() => handleFetchCategory()}>
                    <img className='category__img' src="img/categories/productos.png" alt="" />
                    <p>All Products</p>
                </li>
                {
                    categories?.map(category => (
                        <li className='category__item' onClick={() => handleFetchCategory(category.id)} key={category.id}>
                            <img className='category__img'
                                src={
                                    category.name === 'Smart TV' ? 'img/categories/tv.png' :
                                        category.name === 'Computers' ? 'img/categories/desktop.png' :
                                            category.name === 'Smartphones' ? 'img/categories/telefono.png' : ''
                                }
                                alt={
                                    category.name === 'Smart TV' ? 'Imagen de Televisor color negro' :
                                        category.name === 'Computers' ? 'Imagen de Desktop color negro' :
                                            category.name === 'Smartphones' ? 'Imagen de Telefono color negro' : ''
                                } />
                            <p>{category.name}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FilterCategory