import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = (props) => {
    return ( 
        <>
            <Topbar/>
            <Navbar navcount={props.count}/>
        </>
     );
}
 
export default Header;