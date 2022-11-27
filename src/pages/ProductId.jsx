import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../assets/components/productId/ProductInfo'
import SimilarProducts from '../assets/components/productId/SimilarProducts'
import '../assets/components/productId/styles/productId.css'


const ProductId = () => {

  const [product, setProduct] = useState()

  const { id } = useParams()



  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])


  return (
    <div>

      <section className='container__productById'>
        <ProductInfo product={product} />
      </section>

      <section className='container__similarProducts'>
        <SimilarProducts product={product} />
      </section>

    </div>
  )
}

export default ProductId