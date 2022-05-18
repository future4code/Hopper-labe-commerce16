import React from "react";
import Item from "../Item";

class CartItems extends React.Component {
    render() {
        return (
            <footer>
                <div>
                        {this.props.ProdutosDoCarrinho.map((product) => {
                            return <Item
                                Itens={product}
                            />
                        })}
                </div>
            </footer>
        )
    }
}

export default CartItems;