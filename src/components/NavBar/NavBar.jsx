import "./NavBar.css"
import PictureLogo from "../../assets/logo.png"
import {CartWidget} from "../CartWidget/CartWidget"
import {Link, NavLink} from "react-router-dom"

export const NavBar = () =>{

    return(
        
        <nav className='navegation'>
            <div className="categories">
                <ul>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/category/women">Women</NavLink>
                    <NavLink className={({isActive})=>isActive === true ? 'classActive' : 'classInactive'} to="/category/men">Men</NavLink>
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
        </nav>

    )
}