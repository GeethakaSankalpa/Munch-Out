import React, { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreFoodContext } from "../../FoodContext/StoreFoodContext";
import FoodItemCard from "../FoodItemCard/FoodItemCard";
import { menu_list } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreFoodContext);
  const [selectedValue, setSelectedValue] = useState('All');
  useEffect(() => {
    setSelectedValue('All');    
  }, [category]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  }; 

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-title">
        <h2> Top Dishes Near You </h2>
        {category !== "All" && (
          <select value={selectedValue} onChange={handleSelectChange}>
            {menu_list.find((item) => item.menu_name === category).menu_category.map((option, index) => (
              <option
                className="menu-category-dropdown-content"
                key={index}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
              if (selectedValue !== "All" && selectedValue !== item.type){
                return;
              }
            return (
              <FoodItemCard
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;