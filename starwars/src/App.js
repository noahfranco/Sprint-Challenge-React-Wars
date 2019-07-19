import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import StarWarsList from "./components/StarWarsList";



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [StarWars, setStarWars] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios
  .get("https://swapi.co/api/people/")
  .then((element) => {
    console.log(element)
    setStarWars(element.data.results)
  })
})


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div> 
        <StarWarsList props={StarWars} /> 
      </div>
    </div>
  );
}

export default App;
