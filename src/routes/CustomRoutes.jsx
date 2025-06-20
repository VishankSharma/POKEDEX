import {Routes,Route} from 'react-router-dom'
import Pokedex from '../components/pokedex/pokedex';
import PokemonDetails from '../components/pokemonDetails.jsx/pokemonDetails';

function CustomRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Pokedex />}></Route>
            <Route path='/pokemon/:id'  element={<PokemonDetails/>}></Route>
        </Routes>
    )
}

export default CustomRoutes;