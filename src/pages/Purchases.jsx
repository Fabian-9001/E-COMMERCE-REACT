import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartPurchase from '../assets/components/Purchases/CartPurchase'
import getConfig from '../utils/getConfig'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  console.log(purchases)

  return (
    <div>
      <h2>My Purchases</h2>

      <div>
        {
          purchases?.map(purchase => (
            <CartPurchase
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Purchases