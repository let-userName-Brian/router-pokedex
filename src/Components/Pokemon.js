import React from "react";
import { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom";
import IndividualPokemon from "./IndividualPokemon";


const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
const detailsUrl = `https://pokeapi.co/api/v2/pokemon/`

export default function Pokemon(){
    useEffect(() => {
        fetchPokemon();
        fetchPokemonDetails();
    }, [])

    const [pokemonName, setPokemonName] = useState([]);
    const [detailState, setDetailsState] = useState([]);

    const fetchPokemon = async () => {
        const response = await fetch(`${url}`);
        let data = await response.json();
        setPokemonName(data.results);
    }

    const fetchPokemonDetails = async () => {
        let detailsArray = [];
        for(let i = 1; i <= 10; i++) {
            const res = await fetch(`${detailsUrl}${i}`);
            let details = await res.json();
            detailsArray.push(details)
        }
        setDetailsState((current) => {return [...current, ...detailsArray]})
        // setDetailsState(detailsArray)
        
    }

    // handleClick(e){
    //     e.preventDefault();
    //     let clickedOnPoke = {};
    //     return 
    // }
    
    // let result;
    // if(detailState) {result = <IndividualPokemon details={detailState} />}
    return(
        <div className="pokemon-list">
            <nav>
                <Link to="/favorites">Favorites</Link>
            </nav>
            {pokemonName.map(results => (
                <h1>
                    <Link key={results.name} to={`/characters/${results.name}`}>{results.name}</Link>
                </h1>
            ))}
            <Route path={"/characters/:pokemonName"}>
                <IndividualPokemon details={detailState} />
            </Route>
        </div>
    )
}


//detail

//image  
//type
//detailState.height