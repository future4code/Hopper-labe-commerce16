import React from "react";
import CartItems from "./CartItems";
import Courses from "./Courses";
import NavBar from "./NavBar";
import Filtro from "./Filtro/Filtro"
import AerolitoVoador from "./IMG/aerolito-voador.jpg";
import PedraLeve from "./IMG/pedra-leve.jpg";
import Container from "./IMG/container-de-asteroides.jpg";

//ARRAY DE PRODUTOS DA LOJA
const Produtos = [
    {
        id: 1,
        nome: "Aerolito Voador",
        valor: 50,
        imagem: AerolitoVoador,
        quantidade: 1
    },
    {
        id: 2,
        nome: "Aerolito Pedra",
        valor: 100,
        imagem: PedraLeve,
        quantidade: 1
    },
    {
        id: 3,
        nome: "Aerolito Conteiner",
        valor: 150,
        imagem: Container,
        quantidade: 1
    },
    {
        id: 4,
        nome: "Aerolito Conteiner",
        valor: 200,
        imagem: Container,
        quantidade: 1
    },
    {
        id: 5,
        nome: "Aerolito Conteiner",
        valor: 250,
        imagem: Container,
        quantidade: 1
    },
    {
        id: 6,
        nome: "Aerolito Conteiner",
        valor: 300,
        imagem: Container,
        quantidade: 1
    },
]

class ShoppingCart extends React.Component {
    state ={
        minFiltro:"",
        maxFiltro:"",
        pesquisaFiltro:"",
        sort: 'DECRESCENTE',
        ProdutosNoCarrinho: [
            {
                id: 2,
                nome: "Aerolito Pedra",
                valor: 100,
                imagem: PedraLeve
            },
        ]
    }


    //PARTE DO FILTRO
    Sort = (e) => {
        this.setState({ sort: e.target.value })
    }

    ValorMinimo = (e) => {
        this.setState({minFiltro: e.target.value})
    }
    ValorMaximo = (e) => {
        this.setState({maxFiltro: e.target.value})
    }
    NomeDosProdutos = (e) => {
        this.setState({pesquisaFiltro: e.target.value})
    }

    //PARTE DO CARRINHO
    AdicionarAoCarrinho = () => {
        const novoProdutoNaLista =  [
            {

            }
        ]

        const novaListaDeCompra = [...this.state.ProdutosNoCarrinho , novoProdutoNaLista]
        this.setState({ProdutosNoCarrinho : novaListaDeCompra})
    }

    render () {
    return (
        <>
        <NavBar />
        <Filtro 
        minFiltro={this.state.minFiltro}
        maxFiltro={this.state.maxFiltro}
        pesquisaFiltro={this.state.pesquisaFiltro}
        onChangeValorMinimo={this.ValorMinimo}
        onChangeValorMaximo={this.ValorMaximo}
        onChangeNomeDosProdutos={this.NomeDosProdutos}
        sort={this.state.sort}
        Sort={this.Sort}
        />
        <Courses
        products={Produtos}
        minFiltro={this.state.minFiltro}
        maxFiltro={this.state.maxFiltro}
        pesquisaFiltro={this.state.pesquisaFiltro}
        sort={this.state.sort}
        AdicionarAoCarrinho={this.AdicionarAoCarrinho}
        />
        <CartItems 
        ProdutosDoCarrinho={this.state.ProdutosNoCarrinho}
        />
        </>
    )}
}

export default ShoppingCart;