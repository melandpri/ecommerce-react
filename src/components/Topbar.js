import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    return ( 
        <div style={{backgroundColor:'#1E1E27'}}  className="top-bar container-fluid  d-flex justify-content-between   text-white " >
           <p className="mt-3 ">Free shipping on all u.s orders over 50XAF</p>
           <p className="mt-3" >ecommerce@gmail.com</p>
           <div className="d-flex justify-content-between mx-2 mx-2">
               <div  className="d-flex justify-content-around align-items-center mx-1 p-2">
                  <p className='mt-3'>Login</p>
                  <FontAwesomeIcon className='align-self-center ms-2' icon={faRightToBracket}/>
               </div>

               <div className="d-flex justify-content-between rounded-1 me-5  p-2" >
                  
                  <button  style={{backgroundColor:'#FD3035'}} className=" border border-none text-white mt-3 rounded-2 "> <FontAwesomeIcon className='align-self-center me-2' icon={faUserPlus}/> Register</button>
              </div>

           </div>

        </div>

     );
}
 
export default Topbar;