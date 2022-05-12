import React, { useState } from 'react';
import Carrinho from './components/Carrinho';
import Fitros from './components/Fitros';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  const { produtos } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (produto) => {
    const exist = cartItems.find((x) => x.id === produto.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === produto.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...produto, qyt: 1 }])
    }

  };

  //Estrutura do filtro
  const [Minimo, setValorMinimo] = useState(10)
  const [Maximo, setValorMaximo] = useState(5000)
  const [Pesquisa, setPequisa] = useState("")

  //const FitroDeProdutos = data.filter((produtos) => produtos.includes(Pesquisa))

  return (
    <div>
      <Header />
      <div className='row'>
        <Main onAdd={onAdd} produtos={produtos} />
        <Carrinho onAdd={onAdd} cartItems={cartItems} />
        <Fitros
          ValorMinimo={Minimo}
          ValorMaximo={Maximo}
          Pesquisa={Pesquisa}
          onChangeFitroValorMinimo={setValorMinimo}
          onChangeFitroValorMaximo={setValorMaximo}
          onChangeFitroPesquisa={setPequisa}
        />
      </div>
    </div>
  )

}

export default App;