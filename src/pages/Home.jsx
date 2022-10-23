import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../assets/components/Home/CardProduct'
import { getAllProductsCart } from '../store/slices/cart.slice'


const Home = () => {

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  console.log(products)

  return (
    <main className='home__main'>

      <div className='home__container__products'>
        {
          products?.map(product => (
            <CardProduct
              product={product}
              key={product.id}
            />
          ))
        }
      </div>


    </main>
  )
}

export default Home