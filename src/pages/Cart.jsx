import React from 'react'
import Navbar from '../components/Navbar'
import Cartcard from '../components/Cartcard'
import { useSelector } from 'react-redux'

function Cart() {
  const cartproducts = useSelector((state)=>state.cart.cartproducts)
  console.log(cartproducts)
  return (
    <div>
        <Navbar/>
        
        <Cartcard products = {cartproducts}/>
      
    </div>
  )
}

export default Cart
