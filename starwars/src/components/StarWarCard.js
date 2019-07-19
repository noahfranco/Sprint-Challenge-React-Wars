import React from "react";

function StarWarsCaracterCards(props) {
    return (
        <div> 
            <h2> {props.character.name} </h2>
            <p> Height: {props.character.height} </p>
            <p> Mass: {props.character.mass} </p>
            <p> Hair Color: {props.character.hair_color} </p>
            <p> Skin Color: {props.character.skin_color} </p>  
        </div>
    )
}

export default StarWarsCaracterCards; 