import React, { useContext, useState } from 'react';
import './MenuItemButton.css';
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';
import FoodItemCard from '../FoodIemCard/FoodItemCard';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

const MenuItemButton = ({ options, title, type }) => {
  const { food_list } = useContext(StoreFoodContext);
  const [filteredFoodList, setFilteredFoodList] = useState(food_list);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const newFilteredFoodList = food_list.filter((item) => {
      return selectedValue === "All" || item.category === selectedValue;
    });
    setFilteredFoodList(newFilteredFoodList);
  };

  return (
    <div className='menu-category-dropdown'>
      <select name="" id=""
        onChange={handleSelectChange}>
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