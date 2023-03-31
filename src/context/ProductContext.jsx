import { createContext, useContext, useEffect, useState } from 'react'


const ProductContext = createContext()

export function ProductContextProvider({ children }) {
    const [product, setProduct] = useState()


    return (
        <ProductContext.Provider >
            {children}
        </ProductContext.Provider>
    )
}