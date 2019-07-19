import React from "react"; 
import StarWarsCard from "./StarWarCard.js"; 
import shortid from "shortid"; 

const CharacterList = props => {
    return props.props.map(character => (
        <StarWarsCard key={shortid()} character={character} /> 
    )); 
}
    
export default CharacterList;  