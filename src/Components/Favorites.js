import React, {useState} from 'react'
import { Link } from "react-router-dom";

export default function Favorites({favePokemon, pokeImg}) {
    

    return (
        <div>
            <nav>  
                <Link to="/">Back to the Pokemon</Link>
            </nav>
            <h1>Hey Im the favorites page</h1>
            <h3>Your Favorites are: {favePokemon}!</h3>
        </div>
    )
}
