import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext'
import FoodItemCard from '../FoodIemCard/FoodItemCard'

const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreFoodContext)

  return (
    <div className='food-display' id='food-display'>
      <h2> Top Dishes Near You </h2>
      <div>
        
      </div>
      <div className="food-display-list">
        {food_list.map((item, index) =>{
            if (category === "All" || category === item.category){
              return <FoodItemCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            } else {

            }
            
        } )}
      </div>
    </div>
  )
}

export default FoodDisplay
