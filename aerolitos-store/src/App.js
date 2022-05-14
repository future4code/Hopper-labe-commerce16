import React from "react";
import Carrinho from "./components/Carrinho";

class App extends React.Component{
  state = {
    produtos: [
      {
        id: "1",
        name: "Aerolito de Isopor",
        value: 10.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meteorito_Mar%C3%ADlia.jpg",
      },
      {
        id: "2",
        name: "Aerolito do Guarujá",
        value: 370.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meteorito_Mar%C3%ADlia.jpg",
      },
      {
        id: "3",
        name: "Aerolito Voador",
        value: 5000.0,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Meteorito_Mar%C3%ADlia.jpg",
      },
    ],
    carrinho: [],
  };

  addCarrinho = (produto) => {
    this.setState({
      carrinho: [...this.state.carrinho, produto]
    });
  };

  render() {
    return (
      <div>
        {}
        {this.state.produtos.map((produto) => (
          <div>
            <p><img src={produto.imageUrl} alt={produto.name} width="200px"></img></p>
            <p>{produto.name}</p>
            <p>{produto.value}</p>
            <button onClick={() => this.addCarrinho(produto)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}

        {}
        <Carrinho />
      </div>
    );
  }
}

export default App;