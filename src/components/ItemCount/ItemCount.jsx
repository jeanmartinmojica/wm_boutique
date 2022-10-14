import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import './ItemCount.css'

export const ItemCount = () =>{

    const [counter, setCounter] = useState(1)

    const increment = ()=>{
            setCounter(counter + 1)
    }
    const decrement = ()=>{
            if(counter > 1){
                setCounter(counter - 1)
            }
    }
    
    return(
        <div className="counterContainer">
            <button className="buttonMinus" onClick={decrement}><FontAwesomeIcon className="fa" icon={faMinus} /></button>
            <p className="counterNumber">{counter}</p>
            <button className="buttonPlus" onClick={increment}><FontAwesomeIcon className="fa" icon={faPlus} /></button>
        </div>
    )
}