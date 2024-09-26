import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';
import FoodItemCard from '../FoodItemCard/FoodItemCard';
import { menu_list } from '../../assets/assets';
import MenuItemButton from '../MenuItemButton/MenuItemButton'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreFoodContext);
  const[selectedValue, setSelectedValue] = useState("All");
  

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-title">
        <h2> Top Dishes Near You </h2>
        <div className="food-display-list">
          {category !== "All" && (
            <MenuItemButton
              title={category}
              options={menu_list.find((item) => item.menu_name === category).menu_category}
            />
          )}
        </div>

      </div>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItemCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          } else {

          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay
