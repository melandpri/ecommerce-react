import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="container d-flex flex-row justify-content-around mt-5 mb-5">
            <div>
                <p style={{color:'#1E1E27'}}>@ tech women Factory 2022</p>

            </div>
            <div>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faYoutube}/> 



            </div>
        </div>
     );
}
 
export default Footer;