import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

// Define the ExploreMenu component, which takes in two props: category and setCategory
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1> Explore Our Menu </h1>
            <p className='explore-menu-text'>
                <b> Satisfy Your Cravings: </b> From classic comfort food to innovative twists, our menu is designed to delight your taste buds and
                leave you feeling fulfilled.
            </p>

            <div className="explore-menu-list">
                {/* Use the map function to iterate over the menu list data and create a list item for each menu item */}
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => { setCategory(prev => prev === item.menu_name ? "All" : item.menu_name) }} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
                            <p> {item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;