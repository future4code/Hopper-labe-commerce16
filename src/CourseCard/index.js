import React from "react";
import AerolitoVoador from "../IMG/aerolito-voador.jpg";
import PedraLeve from "../IMG/pedra-leve.jpg";
import Container from "../IMG/container-de-asteroides.jpg";


class CourseCard extends React.Component {
    render() {

        const product = this.props.product

        return (
            <div className="card">
                <img className="card-logo" src={product.imagem} />
                <h1 className="card-title">{product.nome}</h1>
                <p>R${product.valor},00</p>
                <br />
                <button onClick={() => this.props.AdicionarAoCarrinho()}>Adicionar ao carrinho</button>
            </div>
        )
    }
}

export default CourseCard;