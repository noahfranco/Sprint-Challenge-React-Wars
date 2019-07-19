import React from "react";
import {TitleColor} from "./styling"

function StarWarsCaracterCards(props) {
    return (
        <div> 
            <TitleColor> {props.character.name} </TitleColor>
            <p> Height: {props.character.height} </p>
            <p> Mass: {props.character.mass} </p>
            <p> Hair Color: {props.character.hair_color} </p>
            <p> Skin Color: {props.character.skin_color} </p>  
        </div>
    )
}

export default StarWarsCaracterCards; 