import React from "react";

const NavBar = () => {
    return (
        <header>
        <nav>
            <h2 className="logo"> Shopping</h2>
                <div className="nav-bar-actions">
                <div className="nav-bar-itens">
                <span className="nav-bar-itens-quantity">2 Produtos</span>
                        <span className="nav-bar-itens-price">R$ 100.00</span>
                        </div>
                    <button className="clean-btn">Excluir</button>
            </div>
            
        </nav>
    </header>
    )
}

export default NavBar;