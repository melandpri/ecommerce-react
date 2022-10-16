import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = (props) => {
    return ( 
        <>
            <Topbar/>
            <Navbar increment ={props.incre} setincrement={props.setincre} navcount={props.count} navincrementProduct={props.incrementProduct} decreProduct={props.deProduct}/>
        </>
     );
}
 
export default Header;