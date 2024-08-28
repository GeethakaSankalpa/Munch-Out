import React, { useContext } from 'react';
import './MenuItemButton.css';
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';
import FoodItemCard from '../FoodIemCard/FoodItemCard';

const MenuItemButton = ({ options, title, type }) => {
  const { food_list } = useContext(StoreFoodContext);

  const filteredFoodList = type === 'All' ? food_list : food_list.filter(item => item.type === type);

  return (
    <div className='menu-category-dropdown'>
      <select name="" id="">
        {options.map((option, index) => (
          <option className='menu-category-dropdown-content' key={index} value={option}>{option}</option>
        ))}
      </select>
      {filteredFoodList.map((item, index) => (
        <FoodItemCard key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
      ))}
    </div>
  );
};

export default MenuItemButton;