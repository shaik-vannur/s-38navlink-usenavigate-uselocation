import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'

function Cart() {
  return (
    <>
    <Header/>
    <div className='cart-div'>
      
     <NavLink to="/Home"> Back</NavLink>
      <img className='cart-img' src='./images/cart1.jpg'></img>
      <img className='cart-img' src='./images/cart2.jpg'></img>

    </div>
    </>
  )
}

export default Cart
