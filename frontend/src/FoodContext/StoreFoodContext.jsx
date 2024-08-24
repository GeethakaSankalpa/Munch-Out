import { createContext } from "react";
import { food_list } from "../assets/assets";
export const StoreFoodContext = createContext(null)

const StoreFoodContextProvider = (props) => {





    const contextValue = {
        food_list
    }
    
    return(
        <StoreFoodContext.Provider value={contextValue}>
            {props.children}
        </StoreFoodContext.Provider>

    )
}
export default StoreFoodContextProvider