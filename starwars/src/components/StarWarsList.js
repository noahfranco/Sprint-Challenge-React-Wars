import React from "react"; 
import StarWarsCard from "./StarWarsCard.js"; 
import shortid from "shortid"; 

const CharacterList = props => {
    console.log(props.props); 

    let LookHere = shortid(); 
    console.log(LookHere + "Look Here"); 

    return props.props.map(character => {
        <StarWarsCard key={shortid()} character={character} /> 
    }); 
    
}
    
export default CharacterList;  