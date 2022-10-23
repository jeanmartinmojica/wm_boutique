import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartWidget =()=>{

    const {getTotalProducts} = useContext(CartContext)

    return(
        <div>
            <FontAwesomeIcon className="fa-2x" icon={faCartShopping}/>
            <span>{getTotalProducts()}</span>
        </div>
    )
}