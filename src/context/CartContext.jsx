import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

    console.log(cartProducts)

    const isInCart = (id) => {
        const productExists = cartProducts.some((element)=>element.id === id)
        return productExists
    }

    const addProductContext = (item, quantity) =>{

        const cartProductsCopy = [...cartProducts]
        
        if (isInCart(item.id)){
            const productPosition = cartProductsCopy.findIndex((element)=>element.id === item.id)
            cartProductsCopy[productPosition].quantity += quantity
            cartProductsCopy[productPosition].quantityPrice = cartProductsCopy[productPosition].quantity*cartProductsCopy[productPosition].price 
            setCartProducts(cartProductsCopy)
        } else {
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: quantity*item.price,
            }
            cartProductsCopy.push(newProduct)
            setCartProducts(cartProductsCopy)
        }
        
    }

    const getTotalPrice = () => {
        const totalPrice = cartProducts.reduce((acc, curr) => acc + curr.quantityPrice, 0)
        return totalPrice
    }

    const getTotalProducts = () => {
        const totalProducts = cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)
        return totalProducts
    }

    const removeProduct = (id) => {
        const productRemoved = cartProducts.filter((element)=>element.id !== id)
        setCartProducts(productRemoved)
    }

    const deleteCart = () => {
        //setCartProducts([])
    }

    return(
        <CartContext.Provider value={{cartProducts, addProductContext, getTotalPrice, getTotalProducts, removeProduct, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}