import React from "react";
import CourseCard from "../CourseCard";
import Filtro from "../Filtro/Filtro"


class Courses extends React.Component {


    getFilteredAndOrderedList = () => {
        return this.props.products
            .filter((product) => this.props.minFiltro ? product.valor > this.props.minFiltro : true)
            .filter((product) => this.props.maxFiltro ? product.valor < this.props.maxFiltro : true)
            .filter((product) => this.props.pesquisaFiltro ? product.nome.includes(this.props.pesquisaFiltro) : true)
            .sort((primeiro, segundo) => this.props.sort === 'DECRESCENTE' ? primeiro.valor - segundo.valor : segundo.valor - primeiro.valor)
    }


    render() {
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        return (
            <>

                <main className="Main">
                    <section className="courses-section">
                        {filteredAndOrderedList.map((product) => {
                            return <CourseCard
                                product={product}
                                AdicionarAoCarrinho={this.props.AdicionarAoCarrinho}
                            />
                        })}
                    </section>
                </main>
            </>
        )
    }
}

export default Courses;