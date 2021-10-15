import React from 'react'
import { Link } from "react-router-dom";

export default function Favorites() {
    return (
        <div>
            <nav>  
                <Link to="/">Back to the Pokemon</Link>
            </nav>
            <h1>Hey Im the favorites page</h1>
        </div>
    )
}
