import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1> Explore Our Menu </h1>
            <p className='explore-menu-text'><emp> Satisfy Your Cravings: </emp> From classic comfort food to innovative twists, our menu is designed to delight your taste buds and
                leave you feeling fulfilled.
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return(
                        <div key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt=''/>
                            <p> {item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu
