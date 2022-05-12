import React from "react";
import Produto from "./Produto";



class Fitros extends React.Component {
    render() {
        
        return (
            <>
                <div className="Fitros">
                    <h2>Fitros</h2>
                    <div>
                        <p>Valor mínimo</p>
                        <input
                            type="number"
                            placeholder="10"
                            value={this.props.ValorMinimo}
                            onChange={(e) => this.props.onChangeFitroValorMinimo(e.target.value)}
                            min="10"
                            max="5000"
                        />

                        <p>Valor máximo</p>
                        <input
                            type="number"
                            placeholder="5000"
                            value={this.props.ValorMaximo}
                            onChange={(e) => this.props.onChangeFitroValorMaximo(e.target.value)}
                            min="10"
                            max="5000"
                        />

                        <p>Pesquisa</p>
                        <input
                            type="text"
                            placeholder="Ex: Aerolito de Isopor"
                            value={this.props.Pesquisa}
                            onChange={(e) => this.props.onChangeFitroPesquisa(e.target.value.toUpperCase())}
                        />

                    </div>
                </div>
            </>
        )
    }
}
export default Fitros