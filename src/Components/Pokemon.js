import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'

export default function Pokemon(){
    useEffect(() => {
        fetchPokemon()
    }, [])

    const [pokemonName, setPokemonName] = useState([]);

    const fetchPokemon = async () => {
        const response = await fetch(`${url}`);
        let data = await response.json();
        setPokemonName(data.results);
    }


    return (
        <div>
            {pokemonName.map(results => (
                <h1>
                    <Link key={results.name} to={`/characters/${results.name}`}>{results.name}</Link>
                </h1>
            ))}
            
        </div>
    )
}


// const pokemonName = PokmeonName.name;

// function capitalize(pokemonName) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }