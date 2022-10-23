import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const { setProductsGlobal } = productsSlice.actions

export default productsSlice.reducer

export const getAllProductsCart = () => (dispatch) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
    return axios.get(URL,getConfig())
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}