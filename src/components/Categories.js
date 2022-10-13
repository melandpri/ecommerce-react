const Categories = () => {
    return ( 
        <div className=" w-100 d-flex flex-row justify-content-center mt-5">
            <p  style={{backgroundColor:'#FD3035'}} className="text-white px-5  mt-1  mx-3 fs-4  fst-italic rounded-1">All</p>
            <p style={{color:'#1E1E27'}} className="bg-secondary px-5  fst-italic fs-4 mt-1 mx-3 rounded-1">Women' s</p>
            <p style={{color:'#1E1E27'}} className="bg-secondary px-5  fst-italic fs-4 mt-1 mx-3 rounded-1" >Men's</p>
            <p style={{color:'#1E1E27'}} className="bg-secondary px-5  fst-italic fs-4  mt-1  mx-3 rounded-1" >Children' s</p>
        </div>
     );
}
 
export default Categories;