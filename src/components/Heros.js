import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import '../components/style.css';

const Heros = () => {
    return ( 
        <div style={{paddingTop:'50px',height:'70vh',backgroundImage:'url(./images/hero.webp)',backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className="container-fluid">
            <div className='d-flex ms-5 flex-column justify-content-between  align-items-start mt-5'>
                <p className='mt-5 mb-2'>Spring / summer collection 2022</p>
                <h3 className="text-uppercase mt-2" style={{color:'#1E1E27'}}>get up to 45 % off new arrivals </h3>
                <button style={{backgroundColor:'#FD3035'}} className="text-uppercase  mt-2 text-white  border border-none p-2 rounded-2">shop now <FontAwesomeIcon  style={{color:'#FD3035'}} className='align-self-center ms-2 border bg-white rounded-circle p-1' icon={faArrowRight}/>
</button>
            </div>
           
        </div>
     );
}
 
export default Heros;