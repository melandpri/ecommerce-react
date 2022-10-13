import './App.css';
import Header from './components/Header';
import Heros from './components/Heros';
import Shop from './components/Shop';
import Featured from './components/Featured';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {

  const  [cartCount ,setCartCount ] = useState(0);

  const  [cartItem ,setCartItem ] = useState([]);


  return (
    <div className="App">
      
       <Header count={cartCount}/>
       <Heros/>
       <Shop count={cartCount} setCount={setCartCount} item={cartItem} setItem={setCartItem}/>
       <Featured/>
       <Footer/>

    </div>
  );
}

export default App;
