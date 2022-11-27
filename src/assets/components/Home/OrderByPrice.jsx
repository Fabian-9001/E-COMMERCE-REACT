import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from '../../../store/slices/Products.slice'

const OrderByPrice = () => {


    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingProducts())
    }

    const handleDescending = () => {
        dispatch(descendingProducts())
    }

    return (
        <div>
            <h3>Order</h3>
            <button onClick={handleAscending}>Ascending ⬆</button>
            <button onClick={handleDescending}>Descending ⬇</button>
        </div>
    )
}

export default OrderByPrice