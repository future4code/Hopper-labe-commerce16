import React from "react";
import styled from "styled-components";

const Produto1 =
    {
	    id: 1,
	    name: "Foguete da Missão Apollo 11",
	    value: 10000.0,
	    imageUrl: "https://picsum.photos/200/200",
    }

export default class Podutos extends React.Component{
    render() {
        return(
            <div>
                <Produto1 />
            </div>
        )
      }
}