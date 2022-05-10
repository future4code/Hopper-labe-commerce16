import React from "react";

export default function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Não são pedras são Aerolitos</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">Carrinho</a> <a href="#/login">Login</a>
            </div>
        </header>
    )
}