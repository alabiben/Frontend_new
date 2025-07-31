import React, { type ReactNode } from 'react'

import { createContext, useContext } from 'react'

interface ShopContextType {
    // Define the properties and methods you want to expose
    backendUrl: string;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined)

interface ShopContextProviderProps {
    children:ReactNode
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
    const backendUrl = "https://mentorship-project-backend.onrender.com"
    const value: ShopContextType = { 
        backendUrl
     };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => {
    return useContext(ShopContext)
};

export default ShopContextProvider;
