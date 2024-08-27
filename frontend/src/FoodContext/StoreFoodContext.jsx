import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreFoodContext = createContext(null)

const StoreFoodContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    // Add food items to cart
    const addToCart = (foodItemId) => {
        if (!cartItems[foodItemId]) { // adding to the cart first time
            setCartItems((prev) => ({ ...prev, [foodItemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [foodItemId]: prev[foodItemId] + 1 }))
        }
    }

    // Remove food items from cart
    const removeFromCart = (foodItemId) => {
        setCartItems((prev) => ({ ...prev, [foodItemId]: prev[foodItemId] - 1 }))
    }

    // returns card total
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }

        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreFoodContext.Provider value={contextValue}>
            {props.children}
        </StoreFoodContext.Provider>

    )
}
export default StoreFoodContextProvider