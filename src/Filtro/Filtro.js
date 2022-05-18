import React from "react";
import ImgFiltro from "../IMG/filtro.png"

class Filtro extends React.Component {
  render() {
    return (
      <>
        <div className="Filtro">
          <ul>
            <li><img src={ImgFiltro} alt="" />
              <ul>

                <li className="FiltroFilho">
                  <p>Valor Mínimo</p>
                  <input type="number"
                    placeholder="50,00"
                    value={this.props.minFiltro}
                    onChange={this.props.onChangeValorMinimo}
                  />

                  <p>Valor Máximo</p>
                  <input type="number"
                    placeholder="1000,00"
                    value={this.props.maxFitro}
                    onChange={this.props.onChangeValorMaximo}
                  />

                  <p>Busca Produto:</p>
                  <input type="text"
                    placeholder="Ex: Satelite para Aerolito"
                    value={this.props.pesquisaFiltro}
                    onChange={this.props.onChangeNomeDosProdutos}
                  />
                  <br />
                  <br />
                  <select value={this.props.sort} onChange={this.props.Sort}>
                    <option value="DECRESCENTE">Decrescente</option>
                    <option value="CRESCENTE">Crescente</option>
                  </select>
                </li>

              </ul>
            </li>
          </ul>
        </div>



















      </>
    )
  }
}

export default Filtro