import React, { useState } from 'react'
import './FoodItemCard.css'
import { assets } from '../../assets/assets'

const FoodItemCard = ({id, name, price, description, image}) => {
    // inintialize item count of the cart to zero
    const[itemCount, setItemCount] = useState(0)

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt={name}/>
            {!itemCount
                ? <img className='addItem' onClick={()=> setItemCount(prev => prev +1)} src={assets.add_icon_white} alt=""/>
                : <div className="food-item-counter">
                    
                    <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} alt=''/>
                    <p>{itemCount}</p>
                    <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} alt=''/>
                    
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
