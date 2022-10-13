import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
      <div style={{height:'15vh'}} className=" container-fluid   d-flex justify-content-between text-dark navbar-white bg-white">
            <p className=" ms-5 fs-3 my-auto">OUR<span className="fs-3" style={{color:'#FD3035'}} >Shop</span></p>
            <nav className="navbar navbar-expand-lg   ">

            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav my-auto mb-2 mb-lg-0">
                    <li   className="nav-item">
                       <a className="nav-link active " style={{color:'#FD3035'}} >Home</a> 
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-dark">Promotion</a>  
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link text-dark">Contact</a>  
                        
                    </li>
                </ul>

            </div>
            </nav>
  {/* <!-- Button trigger modal --> */}
  <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
            
            <div  className='me-5'>
                    <div>
                        <div>
                            <span className='mt-1 ms-2'>{props.navcount}</span>
                        </div>
                    </div>
                    <FontAwesomeIcon style={{backgroundColor:'#c3c3c3'}} className='fs-3 border border-1 rounded-circle p-2' icon={faCartShopping}/>
            </div>
        
  
  </button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Panier</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <div className='d-flex flex-row justify-content-around align-items-center'>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <p>title</p>
                <p>price</p>
                <p>Quantity: 
                  <button className='mx-3 border rounded-circle p-2'> - </button>
                  <span> 1 </span>
                  <button className='mx-3 border rounded-circle p-2'> + </button>
                </p>
              </div>

         </div>
         <div style={{float:'end'}} className="mt-5">
             <p>title</p>
             <p>price</p>
             <p>Quantity:</p>



         </div>
      </div>
      <div classNme="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Checkout</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>  

      </div>
      );
}
 
export default Navbar;