import { Route, Routes } from 'react-router-dom'
import Header from './assets/components/shared/Header'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {


  /* useEffect(() => {
     const data = {
       firstName: 'Fabian',
       lastName: 'Cruz',
       email: 'garciacruzfabian9001@gmail.com',
       password: 'FCG9001',
       phone: '12345678',
       role: 'admin'
     }
 
     const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`
     axios.post(URL, data)
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
   }, [])*/

  return (
    <div className="App">
      
      <Header />
      
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/login' element={<LoginScreen />} />


        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
