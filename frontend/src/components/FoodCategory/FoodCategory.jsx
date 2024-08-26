import React from 'react'
import './FoodCategory.css'
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext'

const FoodCategory = () => {
    const {food_list} = useContext(StoreFoodContext)
  return (
    <div>
      {food_list.map((item, index) =>{
            if (category === "Salad"){
              return (
              <div>
              <h2> Classic Salad </h2>
              </div>
              )
            } else {

            }
            
        } )}
    </div>
  )
}

export default FoodCategory
