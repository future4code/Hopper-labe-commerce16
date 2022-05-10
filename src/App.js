import React, { useState } from 'react';
import Carrinho from './components/Carrinho';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';


function App() {
    const { produtos } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (produto) => {
      const exist = cartItems.find((x) => x.id === produto.id);
      if(exist){
        setCartItems(
          cartItems.map((x) => 
            x.id === produto.id ? {...exist, qty: exist.qty + 1} : x
          )
        );
      } else {
        setCartItems([...cartItems, {...produto, qyt: 1}])
      }
    };
    
    return (
      <div>
        <Header/>
        <div className='row'>
          <Main onAdd={onAdd} produtos={ produtos }/>
          <Carrinho onAdd={onAdd} cartItems={cartItems}/>
        </div>
      </div>
    )
 
}

export default App;