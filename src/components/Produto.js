import React from 'react'

export default function Produto(props) {
    const { produto, onAdd } = props;
    return (
    <div>
        <img className='small' src={produto.image} alt={produto.name}></img>
        <h3>{produto.name}</h3>
        <div>${produto.value}</div>
        <div>
            <button onClick={()=>onAdd(produto)}>Adicionar ao carrinho</button>
        </div>
    </div>
  )
}
