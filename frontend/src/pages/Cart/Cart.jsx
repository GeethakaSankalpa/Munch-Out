import React, { useContext } from 'react'
import './Cart.css'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext'

const Cart = () => {

  // remove from cart functionality
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreFoodContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <h2><p> Items </p></h2>
          <h2><p> Title </p></h2>
          <h2><p> Price </p></h2>
          <h2><p> Quantity </p></h2>
          <h2><p> Total </p></h2>
          <h2><p> Remove </p></h2>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt='' />
                  <p> {item.name} </p>
                  <p> LKR {item.price} </p>
                  <p> {cartItems[item._id]} </p>
                  <p> LKR {item.price * cartItems[item._id]} </p>
                  <p onClick={() => removeFromCart(item._id)} className='remove-cross'> x </p>
                </div>
                <hr />
              </div>
            )
          }
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2> Cart Totals </h2>
            <div>
              <div className='cart-total-details'>
                <p> Sub Total </p>
                <p> {getTotalCartAmount()} </p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <p> Delivery Fee </p>
                <p> LKR {2} </p>
              </div>
              <hr/>
              <div className='cart-total-details'>
                <b> Total </b>
                <b> LKR {getTotalCartAmount() + 2} </b>
              </div>  
            </div>
            <button> PROCEED TO CHECKOUT </button>
          </div>
          <div className="cart-promo-code">
            <div>
              <p> If you have a promo code, Enter it here </p>
              <div className="cart-promo-code-input">
                <input type="text" placeholder='Promo Code' />
                <button> Submit </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
