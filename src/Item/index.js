import React from "react";

const Item = () => {
    return (
        <li>
        <h2 className="list-title">Descrição</h2>
        <span className="list-price"> R$ 20</span>
        <button  className="remove-btn">Excluir</button>
    </li>
    )
}

export default Item;