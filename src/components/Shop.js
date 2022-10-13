import Categories from "./Categories";
import Search from "./Search";
import Products from "./Products";


const Shop = (props) => {
    const {count , setCount} = props;
    const {item , setItem} = props;

    return ( 
        <div className="container">
            <div className=" w-100 d-flex  flex-column justify-content-center">
                <h4 style={{color:'#1E1E27'}} className="text-uppercase mt-5  mb-2 fs-1">shop</h4>
                <span style={{width:'5%', backgroundColor:'#FD3035',display:'block',width:'50px',height:'10px',margin:'auto'}} ></span>
            </div>
            <Categories/>
            <Search/>
            <Products countproducts={count} setcountproducts={setCount} itemproducts={item} setitemproducts={setItem}/>


           
        </div>
     );
}
 
export default Shop;