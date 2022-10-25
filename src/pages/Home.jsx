import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../assets/components/Home/CardProduct'
import InputSearch from '../assets/components/Home/InputSearch'
import Slider from '../assets/components/Home/Slider'
import { getAllProducts } from '../store/slices/Products.slice'


const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()


  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    if (inputText !== '' && products) {
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    } else {
      setFilterByText(products)
    }
  }, [inputText, products])






  return (
    <main className='home__main'>

      <Slider />
      <InputSearch setInputText={setInputText} inputText={inputText} />
      <div className='home__container__products'>
        {
          filterByText?.map(product => (
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