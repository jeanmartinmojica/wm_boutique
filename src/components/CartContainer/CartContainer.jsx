import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartContainer = () => {

    const {cartProducts, getTotalPrice, removeProduct, deleteCart} = useContext(CartContext)

    return(
        <div>
            <p>página del carrito</p>
            <div>
                {
                    cartProducts.map((product)=>(
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                            <p>{product.quantityPrice}</p>
                            <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
                        </div>
                    ))
                }
                <p><strong>Total Price: {getTotalPrice()}</strong></p>
                <button onClick={deleteCart()}>Borrar carrito</button>
            </div>
        </div>
    )
}