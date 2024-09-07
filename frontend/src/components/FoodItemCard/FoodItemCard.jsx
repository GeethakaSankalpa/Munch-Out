import React, { useContext} from 'react'
import './FoodItemCard.css'
import { assets } from '../../assets/assets'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';

const FoodItemCard = ({id, name, price, description, image}) => {
    // implement add to cart and remove from cart functionality
    const{cartItems, addToCart, removeFromCart} = useContext(StoreFoodContext)

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt={name}/>
            {!cartItems[id]
                ? <img className='addItem' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=""/>
                : <div className="food-item-counter">
                    
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt=''/>
                    
                </div>

            }
        </div>

        <div className="food-item-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='ratings'/>
            </div>
            <p className="food-item-description"> {description} </p>
            <p className="food-item-price"> LKR {price}.00 </p>
        </div>
      
    </div>
  )
}

export default FoodItemCard
