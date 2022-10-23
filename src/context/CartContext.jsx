import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

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
            //SetEmptyCart(false)
        } else {
            const newProduct = {
                ...item,
                quantity: quantity,
                quantityPrice: quantity*item.price,
            }
            cartProductsCopy.push(newProduct)
            setCartProducts(cartProductsCopy)
            //SetEmptyCart(false)
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
        setCartProducts([])
    }

    const increment = (id)=>{
        const cartProductsCopy = [...cartProducts]
        const productPosition = cartProductsCopy.findIndex((ele)=>ele.id === id)
        cartProductsCopy[productPosition].quantity += 1
        cartProductsCopy[productPosition].quantityPrice = cartProductsCopy[productPosition].quantity*cartProductsCopy[productPosition].price
        setCartProducts(cartProductsCopy) 
    }
    const decrement = (id)=>{
        const cartProductsCopy = [...cartProducts]
        const productPosition = cartProductsCopy.findIndex((ele)=>ele.id === id)
        if (cartProductsCopy[productPosition].quantity > 1){
            cartProductsCopy[productPosition].quantity -= 1
            cartProductsCopy[productPosition].quantityPrice = cartProductsCopy[productPosition].quantity*cartProductsCopy[productPosition].price
            setCartProducts(cartProductsCopy) 
        }
    }

    return(
        <CartContext.Provider value={{cartProducts, addProductContext, getTotalPrice, getTotalProducts, removeProduct, deleteCart, increment, decrement}}>
            {children}
        </CartContext.Provider>
    )
}