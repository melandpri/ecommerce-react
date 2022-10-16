import './App.css';
import Header from './components/Header';
import Heros from './components/Heros';
import Shop from './components/Shop';
import Featured from './components/Featured';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

  const [cartCount, setCartCount] = useState(0);

  let  [cartItem, setCartItem] = useState([]);//contient tous les artiches qui sont ajoutés dans notre panier 

  const addProduct = (clickedProduct) => {

    const updatedList = cartItem.map((product) => {

      if (product.id === clickedProduct.id) {
        return {
          ...product, quantity: product.quantity += 1
        }

      }

    })
    setCartItem(updatedList)
  }
  const decreaseProduct = (clickedProduct) => {

    const updatedList = cartItem.map((product) => {

      if (product.id === clickedProduct.id) {
        return {
          ...product, quantity: product.quantity -= 1
        }

      }

    })
    setCartItem(updatedList)
  }


  return (
    <div className="App">

      <Header count={cartItem} incre={cartItem}  setincre={setCartItem} incrementProduct={addProduct}  deProduct={decreaseProduct}/>
      <Heros />
      <Shop count={cartCount} setCount={setCartCount} item={cartItem} setItem={setCartItem} />
      <Featured />
      <Footer />

    </div>
  );
}

export default App;
