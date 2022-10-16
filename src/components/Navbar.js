import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  let {increment, setincrement} = props;
  let {navcount} = props;

  const incrementProduct = (value)  => {
    const ckeckproduct = increment.find(p => p.id === value.id );
    if ( ckeckproduct !== undefined) {
        ckeckproduct.quantity++;
         setincrement([...increment]);
        
    }
  } 

  const decrementProduct = (value)  => {
    const ckeckproduct = increment.find(p => p.id === value.id );
    if ( ckeckproduct !== undefined) {
        ckeckproduct.quantity--;
        if ( ckeckproduct.quantity === 0) {
          let newarray = increment.filter(function(f){return  (f.quantity !== 0)});
          setincrement(newarray);
        }else{
          setincrement([...increment]);
        }
        
    }
  } 
  const totalAccount = (navcount) =>{
    let total = 0;
    for (let product of navcount){
      total += product.quantity * product.price;

    }
    //console.log(total);
    return total;

  }

  

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
  <button  className="my-auto" style={{height:'80px',width:'70px'}} type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
            
            <div  className='me-5'>
                    <div>
                        <div>
                            <span style={{color:'#FD3035',marginLeft:'25px'}}className='mt-1'>{props.navcount.length}</span>
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
        {
          navcount.length === 0 ? ( 
            <p>votre panier est vide</p>
          ) :(
            navcount.map((item,id) => {
              return(
                <div className='d-flex flex-row justify-content-around align-items-center'>
                <div>
                  <img height={300} width={150} src={item.img} alt="" />
                </div>
                <div>
                  <p>title: {item.title} </p>
                  <p>price:  {item.price} </p>
                  <p>Quantity: 
                    <button  style={{backgroundColor:'#FD3035'}} className='mx-3 border rounded-circle p-2'  onClick={() => decrementProduct(item)}> - </button>
                    <span>  {item.quantity} </span>
                    <button  style={{backgroundColor:'#FD3035'}} className='mx-3 border rounded-circle p-2' onClick={(e) => incrementProduct(item)} > + </button>
                  </p>
                </div>
           </div>
          
                
              )
            } )

          )
          

        }
      
         
      </div>
      <div className="modal-footer">
        <div>
          <p>Total Account:{totalAccount(navcount)} </p>
        </div>
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