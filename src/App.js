import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon-form/'

function App() {

  const [pokemon, setPokemon] = useState([])

  async function fetchPokemon(){
    for(let i = 1; i <= 10; i++){
      let response = await fetch(`${url}${i}`)
      let data = await response.json()
      let newPokemon = data.name
      setPokemon((current) => {return (...current, newPokemon)})
      //come back to this in the am
      console.log(newPokemon)
  }
}
  useEffect(() => {
    fetchPokemon()
  }, [pokemon])

  return (
    <div className="App">

      
    </div>
  );
}

export default App;


/*
API URL: https://pokeapi.co/api/v2/{endpoint}/

Mandatory Users Stories
---As a user I:
[] Want to be presented with a list of the first 10 Pokemon from the series on the main page
[] Show the details of selected Pokemon in a nested route
[] Want be able to select Pokemon as “favorites” so that I can access them later.
[] Want a link with a /favorites route that leads to all of the cards that I have favored.

---Stretch Goals
[] Paginate the initial list to allow for browsing a larger selection of Pokemon
[] Search for a Pokemon via its name, retain ability to view details and add it to favorites
[] Use Material UI to style cards.

*/ 