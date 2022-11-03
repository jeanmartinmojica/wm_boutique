import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import './ItemCount.css'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"

export const ItemCount = ({onAdd, itemProduct}) =>{

    const [count, setCount] = useState(1)
    
    const [goToCart, setGoToCart] = useState(false)

    if (goToCart === true){
        return(
            <div>
                <p className="counterNumber">Amount: {count}</p>
                <div className="secondaryButtons">
                    <Link to={'/'}><Button variant="primary">Continue Shopping</Button></Link>
                    <Link to={'/cart'}><Button variant="success">Go to Cart</Button></Link>
                </div>
                
            </div>
        )
    }

    const increment = ()=>{
            
            if (itemProduct.stock > 0 && count < itemProduct.stock){
                setCount(count + 1)
                
            }
            
    }
    const decrement = ()=>{
            if(count > 1){
                setCount(count - 1)
            }
    }
    
    return(
        <div>
            {itemProduct.stock>0 ? 
                <div className="counterContainer">
                    <button className="buttonMinus" onClick={decrement}><FontAwesomeIcon className="fa" icon={faCircleMinus} /></button>
                    <p className="counterNumber">{count}</p>
                    <button className="buttonPlus" onClick={increment}><FontAwesomeIcon className="fa" icon={faCirclePlus} /></button>
                    <Button className="buttonAddToCart" variant="success" onClick={()=>{onAdd(count); setGoToCart(true)}}>Add to cart</Button>
                </div>
                : <Link to={'/'}><Button className="goToShopping" variant="success">Go To Shopping</Button></Link>
            }
        </div>
    )
}