const Product = (props) => {
    const {countproduct , setcountproduct} = props;
    const {itemproduct , setitemproduct} = props;


   {/*} function handleclick(){
        setcountproduct(countproduct+1);

    } onClick={handleclick}*/}
    const addToCart = (value)  => {
        props.setitemproduct([...props.itemproduct,value]);
        console.logs("cartitems: ",props.itemproduct);

    }


    return ( 

            <div    className=" col-4 mt-5 ">
                <div >
                    <img  style={{width:'50%',height:'150px'}} src={props.details.img} alt="chaussure" />
                </div>
                <h5 style={{color:'#1E1E27'}}>{props.details.title}</h5>
                <p style={{color:'#FD3035'}} className="fs-4">{props.details.price}</p>
                <button  onClick={(e)  => addToCart(props.details)}style={{backgroundColor:'#FD3035'}}className="text-white fs-3 border border-none rounded-2 px-5">Add to cart</button>
            </div>
        

     );
}
 
export default Product;