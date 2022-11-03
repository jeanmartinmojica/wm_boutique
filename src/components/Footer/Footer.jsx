import PictureLogo from "../../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


export const Footer = () => {
    
    return(
            
        <footer className="footer">
            <div className="group1">
                <div className="box">
                    <figure>
                        <img src={PictureLogo} alt="Logo" />
                    </figure>
                </div>
                <div className="box">
                    <h3>About Us</h3>
                    <p>We are committed to make you feel comfortable and sure of yourself by offering clothinng diversity and original styles.</p>
                </div>
                <div className="box">
                    <h3>Follow Us</h3>
                    <div className="socialNetworks">
                        <a href="/"><FontAwesomeIcon className="fa facebook" icon={faInstagram} /></a>
                        <a href="/"><FontAwesomeIcon className="fa twitter" icon={faTwitter} /></a>
                        <a href="/"><FontAwesomeIcon className="fa facebook" icon={faFacebook} /></a>
                    </div>
                </div>
            </div>
            <div className="group2">
                <small><b>Copyright <FontAwesomeIcon className="fa-0.5x" icon={faCopyright} /> 2022 W&M Boutique</b> - All rigths reserved</small>
            </div>
        </footer>
        
    )
}