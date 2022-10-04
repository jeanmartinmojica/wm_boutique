import "./NavBar.css"
import PictureLogo from "../../assets/logo.PNG"
import {CartWidget} from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


export const NavBar = () =>{
    return(
        
        <nav className='navegation'>
            <div className="firstOptionsDiv">
                <ul>
                    <FontAwesomeIcon className="fa" icon={faLocationDot} />
                    <li><a href="/">Stores</a></li>
                    <FontAwesomeIcon className="fa" icon={faWhatsapp} />
                    <li><a href="/">WhatsApp</a></li>
                </ul>
            </div>
            <div className="logoDiv">
                <img className='logo' src={PictureLogo} alt="logo"/>
            </div>
            <div className="cartDiv">
                <CartWidget/>
            </div>
            <div className="secondOptionsDiv">
                <ul className='second-list'>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Denim</a></li>
                    <li><a href="/">Promotions</a></li>
                    <li><a href="/">Gift Cards</a></li>
                </ul>
            </div>
        </nav>

    )
}