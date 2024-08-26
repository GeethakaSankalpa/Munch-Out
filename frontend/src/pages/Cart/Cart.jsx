import React, { useContext } from 'react'
import './Cart.css'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext'

const Cart = () => {

  // remove from cart functionality
  const { cartItems, foodList, removeFromCart } = useContext(StoreFoodContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p> Items </p>
          <p> Title </p>
          <p> Price </p>
          <p> Quantity </p>
          <p> Total </p>
          <p> Remove </p>
        </div>
        <br />
        <hr />
        {foodList.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item">
                <p> {item.name} </p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
