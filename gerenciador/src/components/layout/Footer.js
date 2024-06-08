import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            
            <div>
                <ul className={styles.social_list}>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>
                </ul> 
                <p>Nosso Rodapé</p>               
            </div>
        </footer>
    )
}

export default Footer