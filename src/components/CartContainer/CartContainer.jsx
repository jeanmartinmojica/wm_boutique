import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartEmptyImg from '../../assets/EmptyCart.png'
import './CartContainer.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import { db } from '../../utils/firebase'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import swal from 'sweetalert';


export const CartContainer = () => {

    const {cartProducts, getTotalPrice, removeProduct, deleteCart, increment, decrement, getTotalProducts} = useContext(CartContext)

    if (cartProducts.length === 0){
        return (
            <div className="cartEmptyContainer">
                <div className="cartEmptyImg">
                    <img src={CartEmptyImg} alt="" />
                    <p>There are not products here</p>
                </div>
                <div>
                    <Link to={"/"}><Button variant="success">Go To Shopping</Button></Link>
                </div> 
            </div>
            
        ) 
    }

    const sendOrder = (evt) =>{
        evt.preventDefault()
        const order = {
            buyer: {
                name: evt.target[0].value, 
                phone: evt.target[1].value, 
                email: evt.target[2].value
            }, 
            items: cartProducts,
            total: getTotalPrice()
        }
        const queryRef = collection(db, 'orders')
        addDoc(queryRef, order).then((result)=>{
            orderConfirmation(result.id)
            confirmPurchase()
            deleteCart()
        })
    }

    const orderConfirmation = (id) =>{
        swal("Order succesfully completed!", `Order reference: ${id}`, "success");
    }

    const confirmPurchase = () => {
        cartProducts.forEach(element => {
        const totalStock = element.stock - element.quantity
        const queryRef = doc(db, 'products', element.id)
        updateDoc(queryRef, {stock: totalStock})
        });
    }

    return(
        <>
        <div className="cartGreeting">
            <h5><strong>Welcome to Shopping Cart!</strong></h5>
        </div>
        <div className="cartContainer">  
            <div className="cartProducts">
                <div className="cartTittle">
                    <h5>Your Cart ({getTotalProducts()})</h5>
                </div>
                <div className="cartProductList">
                    {
                    cartProducts.map((product)=>(
                    <>
                        <div className="productImg">
                            <img src={product.pictureUrl} alt="Product"/>
                        </div>
                        <div className="productDetail">
                            <h6><strong>{product.title}</strong></h6>
                            <h6><strong>Price:</strong>  $ {product.price} USD</h6>
                            <h6><strong>Stock:</strong>  {product.stock}</h6>
                            <h6><strong>Amount:</strong>  {product.quantity}</h6>
                        </div>
                        <div className="editingAmount">
                            <h6><strong>Edit Amount:</strong></h6>
                            <button className="buttonMinus" onClick={()=>decrement(product.id)}><FontAwesomeIcon className="fa" icon={faCircleMinus}/></button>
                            {product.quantity}
                            <button className="buttonPlus" onClick={()=>increment(product.id)}><FontAwesomeIcon className="fa" icon={faCirclePlus} /></button>
                        </div>
                        <div className="totalQuantity">
                            <strong>$ {product.quantityPrice} USD</strong>    
                        </div>
                        <div className="deleteItem">
                            <FontAwesomeIcon onClick={()=>removeProduct(product.id)} className="fa-2x trash" icon={faTrash}/>
                        </div>
                    </>
                    ))
                    }
                </div>
                
                <div className="TotalAndDeleteCart">
                    <div className="totalPrice">
                        <h5><strong>Total:</strong>  $ {getTotalPrice()} USD</h5>
                    </div>
                    <Button onClick={deleteCart} variant="danger">Delete Cart</Button>
                </div>
            </div>   
                
            
                
                <form className="form" onSubmit={sendOrder}>
                    <h5 className="formTitle">Purchase Confirmation:</h5>
                    <div className="formContainer">
                        <div className="formGroup">
                            <input type="text" id="name" className="formInput" placeholder=" " />
                            <label htmlFor="name" className="formLabel">Full Name:</label>
                            <span className="formLine"></span>
                        </div>
                        <div className="formGroup">
                            <input type="text" id="phone" className="formInput" placeholder=" " />
                            <label htmlFor="phone" className="formLabel">Phone Number:</label>
                            <span className="formLine"></span>
                        </div>
                        <div className="formGroup">
                            <input type="text" id="email" className="formInput" placeholder=" " />
                            <label htmlFor="email" className="formLabel">Email:</label>
                            <span className="formLine"></span>
                        </div>
                    </div>
                    <Link to={"/"}>
                    <Button className="formGoBack" variant="primary">Go To Shopping</Button></Link>
                    <Button type="submit" className="formSubmit" variant="success">Confirm Purchase</Button>
                    
                </form>
        </div>
        </>
    )
}