import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Pokemon from './Components/Pokemon'
import Favorites from './Components/Favorites';
import { FavoritesContextProvider } from "./FavoritesContext";


export default function App() {
  return (
    <BrowserRouter>
    <FavoritesContextProvider>
      <div className="Switches">
        <Switch>
          <Route path="/favorites" exact component={Favorites}/>
          <Route path="/" component={Pokemon} />
        </Switch>
      </div>
      </FavoritesContextProvider>
    </BrowserRouter>
  );
}




/*
API URL: https://pokeapi.co/api/v2/{endpoint}/

Mandatory Users Stories
---As a user I:
[/] Want to be presented with a list of the first 10 Pokemon from the series on the main page
[/] Show the details of selected Pokemon in a nested route
[] Want be able to select Pokemon as “favorites” so that I can access them later.
[/] Want a link with a /favorites route that leads to all of the cards that I have favored.

---Stretch Goals
[] Paginate the initial list to allow for browsing a larger selection of Pokemon
[] Search for a Pokemon via its name, retain ability to view details and add it to favorites
[] Use Material UI to style cards.
*/ 