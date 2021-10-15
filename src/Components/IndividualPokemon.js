import { useParams, Link, Route } from 'react-router-dom';
import Favorites from "./Favorites";
import { FavorietesContext } from "./FavoritesContext";



export default function IndividualPokemon({details}) {

    let { pokemonName } = useParams();

    console.log('Details', details)
    let newPokeFact = {};
    
    for(let i = 0; i < details.length; i++){
        if(details[i].name === pokemonName){
            console.log(details[i].types[0].type.name)
            newPokeFact.height = details[i].height;
            newPokeFact.weight = details[i].weight;
            newPokeFact.types = [];
            for(let j = 0; j < details[i].types.length; j++){
                if (j === details[i].types.length - 1){
                    newPokeFact.types.push(details[i].types[j].type.name);
                } else {
                    newPokeFact.types.push(details[i].types[j].type.name + ", ");
                }
            }
            newPokeFact.moves = [];
            for(let k = 0; k < details[i].moves.length; k++){
                if (k === details[i].moves.length - 1){
                    newPokeFact.moves.push(details[i].moves[k].move.name);
                } else {
                    newPokeFact.moves.push(details[i].moves[k].move.name + ", ");
                }
            }
            newPokeFact.img = details[i].sprites.front_default;
        }
    }


    return (
        <div className="details">
            <h2>I choose you {pokemonName}!</h2>
            <img src={newPokeFact.img} />
            <p>Height: {newPokeFact.height} inches</p>
            <p>Weight: {newPokeFact.weight} lbs</p>
            <p>Type: {newPokeFact.types}</p>
            <p>All my moves are: {newPokeFact.moves}</p>
            <Link to="/favorites">Add to favorites</Link> 
            <Route path='/favorites'> 
                <Favorites favePokemon={pokemonName} pokeImg={newPokeFact.img}/>
            </Route>
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
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

<LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
      >
        Save
      </LoadingButton>
*/
