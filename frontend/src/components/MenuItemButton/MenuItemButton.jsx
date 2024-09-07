import React, { useContext, useState, useMemo } from 'react';
import './MenuItemButton.css';
import { StoreFoodContext } from '../../FoodContext/StoreFoodContext';
import FoodItemCard from '../FoodItemCard/FoodItemCard';
import FoodDisplay from '../FoodDisplay/FoodDisplay';

const MenuItemButton = ({ options, title}) => {
  const { food_list } = useContext(StoreFoodContext);
  const [selectedValue, setSelectedValue] = useState('All');

  const filteredFoodList = useMemo(() => {
    if (selectedValue === 'All') return food_list;
    return food_list.filter((item) => item.category === selectedValue);
  }, [food_list, selectedValue]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
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