import "./NavBar.css"
import PictureLogo from "../../assets/logo.PNG"
import {CartWidget} from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from "react-router-dom"


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
                <Link to="/">
                    <img className='logo' src={PictureLogo} alt="logo"/>
                </Link>
                
            </div>
            <div className="cartDiv">
                <Link to='/cart'>
                    <CartWidget/>
                </Link>
            </div>
            <div className="secondOptionsDiv">
                <ul className='second-list'>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/category/women">Women</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/category/men">Men</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/category/denim">Denim</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/promotions">Promotions</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/giftcards">Gift Cards</NavLink>
                </ul>
            </div>
        </nav>

    )
}