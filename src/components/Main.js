import React from "react";
import Produto from "./Produto";

export default function Main(props) {
    const { produtos, onAdd } = props;
    return(
        <main className="block col-2">
            <h2>Produtos</h2>
            <div className="row">
                {produtos.map((produto) => (
                    <Produto key={produto.id} produto={produto} onAdd={onAdd} />
                ))}
            </div>
        </main>
    )
}

