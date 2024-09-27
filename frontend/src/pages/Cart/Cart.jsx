import React, { useContext } from 'react';
import './Cart.css';
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreFoodContext);
  const navigate = useNavigate();

  const isCartEmpty = Object.values(cartItems).every(item => item <= 0);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          {isCartEmpty ? (
            <div className='cart-items-empty'>
              <h2>The Cart is Empty</h2>
            </div>
          ) : (
            <>

              <h2>Items</h2>
              <h2>Title</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
              <h2>Remove</h2>
              

              
            </>
          )}
          {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div>
                      <div className=" cart-items-item">
                        <img src={item.image} alt='' />
                        <p> {item.name} </p>
                        <p> LKR {item.price} </p>
                        <p> {cartItems[item._id]} </p>
                        <p> LKR {item.price * cartItems[item._id]} </p>
                        <p onClick={() => removeFromCart(item._id)} className='remove-cross'> x </p>
                      </div>
                  
                    </div>

                  )
                }
                return null; // In case the quantity is not greater than zero
              })}
        </div>
       
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className='cart-total-details'>
                <p>Sub Total</p>
                <p>LKR {getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>LKR {getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className='cart-total-details'>
                <b>Total</b>
                <b>LKR {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promo-code">
            <div>
              <p>If you have a promo code, enter it here</p>
              <div className="cart-promo-code-input">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
