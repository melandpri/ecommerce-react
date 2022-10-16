const Product = (props) => {
    const {countproduct , setcountproduct} = props;
    const {itemproduct , setitemproduct} = props;
    const {details} =props;

    
    


   {/*} function handleclick(){
        setcountproduct(countproduct+1);

    } onClick={handleclick}*/}
    // si un produit est deja dans le panier on ne l' ajoute plus 
  


    const addToCart = (value)  => {
        const ckeckproduct = itemproduct.find(details => details.id === value.id );//si ca retounr indéfini ca veux dire que le produit n' est pas présent de le panier,la valeur qu'on recoit en entrée et celle qui se trouve dans notre tableau 
        if ( ckeckproduct !== undefined) {
            ckeckproduct.quantity++;//on icremente la quantité dans le panier comme le produit n' est pas a l' intérieur 
            setitemproduct([...itemproduct]);//et on retourne le panier
            
        } else {
            value.quantity=1;//si c'est présent on laisse sa quantité a  1 et on retourne le tableau
            setitemproduct([...itemproduct,value]);

            
        }
        
        // console.log("cartitems: ",itemproduct);

    }


    return ( 

            <div    className=" col-4 mt-5 ">
                <div >
                    <img  style={{width:'50%',height:'150px'}} src={props.details.img} alt="chaussure" />
                </div>
                <h5 style={{color:'#1E1E27'}}>{details.title}</h5>
                <p style={{color:'#FD3035'}} className="fs-4">{details.price}</p>
                <button  onClick={()  => addToCart(details)}style={{backgroundColor:'#FD3035'}}className="text-white fs-3 border border-none rounded-2 px-5">Add to cart</button>
            </div>
        

     );
}
 
export default Product;