import React from "react";

class Item extends React.Component {
    render() {
    return (
        <li>
        <h2 className="list-title">{this.props.Itens.nome}</h2>
        <span className="list-price">{this.props.Itens.valor}</span>
        <button  className="remove-btn">Excluir</button>
    </li>
    )}
}

export default Item;