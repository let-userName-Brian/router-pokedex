import React, { useState } from 'react'
// import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



export default function IndividualPokemon({details}) {

    const [pokeFacts, updateFacts] = useState(fact: [])
    let { pokemonName } = useParams();

    console.log('Details', details)
    console.log('PokeFact', pokeFacts)
    
    if(details === undefined){
       console.log('idiot')
    } else if (details.length) {
        let newPokeFact = {};
    for(let i = 0; i < details.length; i++){
        if(details[i].name === pokemonName){
            console.log(details[i].types[0].type.name)
            newPokeFact.height = details[i].height;
            newPokeFact.weight = details[i].weight;
            newPokeFact.types = [];
            for(let j = 0; j < details[i].types.length; j++){
                newPokeFact.types.push(details[i].types[j].type.name);
            }
            newPokeFact.moves = [];
            for(let k = 0; k < details[i].moves.length; k++){
                newPokeFact.types.push(details[i].moves[k].move.name);
            }
            newPokeFact.img = details[i].sprites.front_default;
            // console.log(newPokeFact)
        }
    }
    updateFacts({fact: newPokeFact});
    }



    return (
        <div>
            <h2>Hey you chose {pokemonName}</h2>
            {/* <img src={pokeFacts.img} />
            <p>Height:{pokeFacts.height}</p>
            <p>Weight:{pokeFacts.weight}</p>
            <p>Type:{pokeFacts.types}</p>
            <p>Moves:{pokeFacts.moves}</p> */}
        </div>
    )
}


//details[i].sprites.front_default
//details[i].types[0].type.name


//pass down the details state to the child
//access state in child and pass the params to the 
//url call and match names accordingly
//set state in child to whatever is being displayed 


/*
//list of all products
function Products() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Products for Engineers</h2>

      <ul>
        <li>
          <Link to={`${match.url}/Rubber-Ducky`}>{results.name}</Link>
        </li>
        <li>
          <Link to={`${match.url}/Tylenol`}>
            Tylenol 
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/A-Good-Chair`}>
            A good chair 
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

//here are your products
function Product() {
  let { productId } = useParams();

  return (
    <div>
      <h3>Hey you chose {productId}!</h3>
      <p>I'll work on getting that in your cart</p>
      <p>You'll need {productId} ASAP</p>
    </div>
  )
}
*/