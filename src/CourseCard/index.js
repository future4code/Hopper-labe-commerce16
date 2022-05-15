import React from "react";

const CourseCard = (props) => {
    const { photo} = props;
    
    return (
        <div className="card">
        <img className="card-logo"  src={photo} alt="aerolito-voador" />
            <h1 className="card-title">Aerolito 1</h1>
            
        <button>Adicionar ao carrinho</button>
    </div>
    )
}

export default CourseCard;