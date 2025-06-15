import Pokemon from "../pokemon/pokemon"
import PokemonList from "../pokemonList/pokemonList"
import Search from "../search/search"
import "./pokedex.css"

function pokedex(){
  return(
    <div className="pokedex-wrapper">
      
        < Search/>
        <PokemonList/>
        
    </div>
  )
}

export default pokedex