import data from "./data";
import Product from "./Product";

const Products = (props) => {
    const {countproducts , setcountproducts} = props;
    const {itemproducts , setitemproducts} = props;


    return ( 
        <div  style={{width:"100%",flexWrap:'wrap'}} className=" container d-flex  flex-row  justify-content-between mt-5">
            {data.map((product)  => {
                return(
                    <Product key={product.id} details={product} countproduct={countproducts} setcountproduct={setcountproducts} itemproduct={itemproducts} setitemproduct={setitemproducts}/>

                )
            })

        }

</div>

     )

}
 
export default Products;