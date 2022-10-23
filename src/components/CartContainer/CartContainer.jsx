import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartEmptyImg from '../../assets/EmptyCart.png'
import './CartContainer.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const CartContainer = () => {

    const {cartProducts, getTotalPrice, removeProduct, deleteCart} = useContext(CartContext)
    
    if (cartProducts.length === 0){
        return (
            <div className="cartEmptyContainer">
                <div className="cartEmptyImg">
                    <img src={CartEmptyImg} alt="" />
                    <p>There is not products here</p>
                </div>
                <div>
                    <Link to={"/"}><Button variant="success">Go To Shopping</Button></Link>
                </div> 
            </div>
            
        ) 
    }

    return(
        <div>  
            <div>
                <p>Welcome to Shpping Cart</p>
                {
                    cartProducts.map((product)=>(
                        <div>
                            <tbody>
                                <tr>
                                    <td className="imgCell"><img src={product.pictureUrl} alt="" /></td>
                                    <td className="nameCell">{product.title}</td>
                                    <td className="priceCell">Unite Price: ${product.price}</td>
                                    <td className="amountCell">Amount: {product.quantity}</td>
                                    <td className="finalPriceCell">Final Price: ${product.quantityPrice}</td>
                                    <td><FontAwesomeIcon onClick={()=>removeProduct(product.id)} className="fa trash" icon={faTrash}/>
                                    </td>
                                </tr>
                            </tbody>
                        </div>
                    ))
                }
                <div className="finalCartContainer">
                    <p>Total Price: ${getTotalPrice()}</p>
                    <Button onClick={deleteCart} variant="danger">Delete Cart</Button>
                </div>
                
            </div>
        </div>
    )
}