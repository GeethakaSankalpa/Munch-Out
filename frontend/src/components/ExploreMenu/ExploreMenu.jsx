// Import the React library
import React from 'react';

// Import the CSS file for this component
import './ExploreMenu.css';

// Import the menu list data from the assets folder
import { menu_list } from '../../assets/assets';

// Define the ExploreMenu component, which takes in two props: category and setCategory
const ExploreMenu = ({ category, setCategory }) => {
    // Return the JSX for the component
    return (
        // Create a div with the class 'explore-menu' and id 'explore-menu'
        <div className='explore-menu' id='explore-menu'>
      {/* Display the heading "Explore Our Menu" */}
            <h1> Explore Our Menu </h1>
      {/* Display a paragraph of text with a bolded section */}
            <p className='explore-menu-text'>
                <b> Satisfy Your Cravings: </b> From classic comfort food to innovative twists, our menu is designed to delight your taste buds and
                leave you feeling fulfilled.
            </p>
      {/* Create a div to hold the menu list items */}
            <div className="explore-menu-list">
        {/* Use the map function to iterate over the menu list data and create a list item for each menu item */}
                {menu_list.map((item, index) => {
                    // Return a div for each menu item
                    return (
                        // Create a div with an onClick event handler that updates the category state
                        <div onClick={() => { setCategory(prev => prev === item.menu_name ? "All" : item.menu_name) }} key={index} className="explore-menu-list-item">
              {/* Display an image for the menu item, with a class of 'active' if the current category matches the menu item's name */}
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              {/* Display the menu item's name */}
                            <p> {item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
      {/* Add a horizontal rule to separate the menu list from the rest of the content */}
            <hr />
        </div>
    );
};

// Export the ExploreMenu component as the default export
export default ExploreMenu;