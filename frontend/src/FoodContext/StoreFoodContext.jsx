import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreFoodContext = createContext(null)

const StoreFoodContextProvider = (props) => {

    const[cartItems, setCartItems] = useState({});

    // Add food items to cart
    const addToCart = (foodItemId) => {
        if(!cartItems[foodItemId]){ // adding to the cart first time
            setCartItems((prev) => ({...prev, [foodItemId]:1}))
        } else {
            setCartItems((prev) => ({...prev, [foodItemId]:prev[foodItemId]+1}))
        }
    }

    // Remove food items from cart
    const removeFromCart = (foodItemId) =>{
        setCartItems((prev) => ({...prev, [foodItemId]:prev[foodItemId] - 1}))
    }

    useEffect(() =>{
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    
    return(
        <StoreFoodContext.Provider value={contextValue}>
            {props.children}
        </StoreFoodContext.Provider>

    )
}
export default StoreFoodContextProvider