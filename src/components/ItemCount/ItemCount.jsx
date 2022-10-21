import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import './ItemCount.css'
import Button from "react-bootstrap/Button";

export const ItemCount = ({onAdd}) =>{

    const [count, setCount] = useState(1)

    const increment = ()=>{
            setCount(count + 1)
    }
    const decrement = ()=>{
            if(count > 1){
                setCount(count - 1)
            }
    }
    
    return(
        <div className="counterContainer">
            <button className="buttonMinus" onClick={decrement}><FontAwesomeIcon className="fa" icon={faMinus} /></button>
            <p className="counterNumber">{count}</p>
            <button className="buttonPlus" onClick={increment}><FontAwesomeIcon className="fa" icon={faPlus} /></button>
            <Button className="buttonAddToCart" variant="success" onClick={()=>onAdd(count)}>Add to cart</Button>
        </div>
    )
}