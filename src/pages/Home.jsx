import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../assets/components/Home/CardProduct'
import FilterCategory from '../assets/components/Home/FilterCategory'
import FilterPrice from '../assets/components/Home/FilterPrice'
import InputSearch from '../assets/components/Home/InputSearch'
import OrderByPrice from '../assets/components/Home/OrderByPrice'
import Slider from '../assets/components/Home/Slider'
import { getAllProducts } from '../store/slices/Products.slice'


const Home = () => {

  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({ from: 0, to: Infinity })

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


  const callBackFilterByPrice = product => {
    return +product.price > filterByPrice.from && +product.price <= filterByPrice.to
  }

  return (
    <main className='home__main'>

      <Slider />
      <InputSearch setInputText={setInputText} inputText={inputText} />


      <div className='home__container__filters'>
        <FilterPrice setFilterByPrice={setFilterByPrice} />
        <OrderByPrice />
      </div>
      <div className='home__container__categories'>
        <FilterCategory />
      </div>


      {/*}  <div className='container__background__svgs'>

        <span className='background__svg'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#BAE6FF" d="M32.4,-59.8C43.2,-50,53.8,-43.6,64.3,-34.2C74.8,-24.8,85.1,-12.4,87.8,1.5C90.5,15.5,85.4,31,75.7,41.7C66,52.4,51.5,58.3,38.1,61.7C24.7,65.1,12.4,65.9,-1,67.7C-14.4,69.4,-28.7,72.1,-40.9,68C-53.1,63.9,-63.1,53,-68.4,40.6C-73.6,28.1,-74.1,14.1,-76.2,-1.2C-78.3,-16.5,-82.1,-33.1,-76.2,-44.3C-70.3,-55.5,-54.6,-61.5,-40.3,-69.2C-25.9,-76.9,-13,-86.5,-1.1,-84.7C10.9,-82.8,21.7,-69.6,32.4,-59.8Z" transform="translate(100 100)" />
          </svg>
        </span>

        <span className='background__svg'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E8DAFF" d="M46.3,-74.4C60.6,-72,73.1,-60.7,71.7,-46.8C70.3,-33,55.1,-16.5,53.7,-0.8C52.3,14.9,64.8,29.7,64.7,41.1C64.7,52.5,52,60.4,39.2,60.3C26.3,60.2,13.1,52.1,0.7,50.9C-11.7,49.6,-23.4,55.1,-34.7,54.4C-46.1,53.6,-57.2,46.5,-60.2,36.4C-63.1,26.3,-57.9,13.2,-60.5,-1.5C-63.1,-16.2,-73.6,-32.3,-72.6,-45.8C-71.6,-59.3,-59.1,-70.1,-45.1,-72.7C-31.1,-75.3,-15.6,-69.8,0.2,-70.2C16,-70.6,32,-76.9,46.3,-74.4Z" transform="translate(100 100)" />
          </svg>
        </span>

        <span className='background__svg'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFD6E8" d="M40.5,-69.6C49.8,-64.7,53,-48.5,54.2,-35.1C55.5,-21.6,54.8,-10.8,54.4,-0.2C54,10.3,53.9,20.7,48.3,26.6C42.6,32.5,31.5,34,22.6,42.6C13.6,51.2,6.8,66.9,-1,68.7C-8.8,70.4,-17.7,58.2,-31.7,52.5C-45.7,46.8,-64.9,47.7,-73,40C-81.2,32.3,-78.3,16.2,-71,4.2C-63.6,-7.7,-51.9,-15.4,-46.6,-28.1C-41.3,-40.7,-42.6,-58.3,-35.9,-64.8C-29.2,-71.3,-14.6,-66.7,0.5,-67.5C15.6,-68.4,31.1,-74.6,40.5,-69.6Z" transform="translate(100 100)" />
          </svg>
        </span>

        <span className='background__svg'>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="
#9AD1D0" d="M37.4,-65.8C48.5,-58.3,57.7,-48.4,58,-37.1C58.4,-25.7,49.9,-12.9,50.8,0.5C51.6,13.8,61.7,27.6,62.3,40.7C62.9,53.7,54,65.9,42.1,74.9C30.1,83.8,15,89.4,3.7,83C-7.7,76.7,-15.3,58.3,-26.3,48.7C-37.2,39.2,-51.4,38.5,-61.3,31.9C-71.2,25.2,-76.9,12.6,-71.6,3.1C-66.2,-6.5,-49.9,-13,-41.1,-21.4C-32.2,-29.8,-30.7,-40.2,-25.1,-50.9C-19.5,-61.6,-9.7,-72.5,1.7,-75.5C13.1,-78.4,26.3,-73.3,37.4,-65.8Z" transform="translate(100 100)" />
          </svg>
        </span>

  </div>{*/}


      <div className='home__container__products'>
        {
          filterByText?.filter(callBackFilterByPrice).map(product => (
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