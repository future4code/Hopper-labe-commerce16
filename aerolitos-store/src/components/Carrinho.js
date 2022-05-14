import React from "react";

let productList = [
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
      }
]
class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            qty:0
        };
        
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add(){
        this.setState({
            qty: this.state.qty +1
        });
    }

    remove(){
        this.setState({
            qty: this.state.qty -1
        });
    }

    render(){
        return (
            <div>
                <div className="linha">
                    <div className="coluna-1">
                        <h4>{this.props.name}: R${this.props.value*this.state.qty}</h4>
                    </div>
                    <div className="coluna-2">
                        Quantidade: {this.state.qty}
                    </div>
                    <div className="coluna-3">
                        <button onClick={this.add}>+</button>
                        <button onClick={this.remove} disabled={this.state.qty < 1}>-</button>
                    </div>
                </div>
            </div>
        );
    }

    
}

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productList: ""
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({ productList : productList})
        }, 1000);
    }

    render(){
        if (!this.state.productList) return <p>Carregando...</p>;

        var component = this;
        var products = this.state.productList.map(function(product){
            return(
                <Product name={product.name}
                    value={product.value}/>
            );
        });

        return(
            <div>
                {products}
            </div>
            
        );
    }
}

function Carrinho(){
    return(
        <div>
            <ProductList />
        </div>
    )
}

export default Carrinho;