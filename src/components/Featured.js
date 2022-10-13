import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Featured = () => {
    return ( 
        <div style={{backgroundColor:'#c3c3c3',height:'65vh'}} className="container-fluid d-flex  flex-row justify-content-around mt-5 mb-5">
            <div >
                <img src="./images/black-hoodie-mockup_125540-877-removebg-preview.png" alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <h4 style={{color:'#1E1E27'}} className="text-uppercase fs-1"  >Deal of The Week</h4>
                <span style={{width:'50%', backgroundColor:'#FD3035',display:'block',height:'10px',margin:'auto'}} className='mt-2'></span>

                <div className="d-flex flex-row justify-content-end mt-0 mb-5">
                    <div className="border border-dark rounded-circle  px-2  mx-2 bg-light d-flex flex-column">
                        <h3 style={{color:'#FD3035'}}>1</h3>
                        <p style={{color:'#1E1E27'}} className="fs-6">Day</p>
                    </div>
                    <div className="border border-dark rounded-circle px-2  mx-2 bg-light d-flex flex-column">
                        <h3 style={{color:'#FD3035'}} >24</h3>
                        <p style={{color:'#1E1E27'}} className="fs-6">Hours</p>
                    </div>
                    <div className="border border-dark rounded-circle px-2  mx-2 bg-light d-flex flex-column">
                        <h3 style={{color:'#FD3035'}}>53</h3>
                        <p style={{color:'#1E1E27'}} className="fs-6">Minutes</p>
                    </div>
                    <div className="border border-dark rounded-circle px-2  mx-2 bg-light d-flex flex-column">
                        <h3 style={{color:'#FD3035'}}>12</h3>
                        <p style={{color:'#1E1E27'}} className="fs-6">Secondes</p>
                    </div>
                </div>
                <button className="text-uppercase text-white float-end mb-5 p-2 border border-none rounded-2" style={{backgroundColor:'#FD3035'}}>shop now <FontAwesomeIcon  style={{Color:'#FD3035'}} className='align-self-center ms-2 border border-none  bg-white p-2 rounded-circle' icon={faArrowRight}/></button>

            </div>
        </div>
     );
}
 
export default Featured;