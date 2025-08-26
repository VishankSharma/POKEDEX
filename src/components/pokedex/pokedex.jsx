import { useState } from "react";
import Pokemon from "../pokemon/pokemon"
import PokemonList from "../pokemonList/pokemonList"
import Search from "../search/search"
import "./pokedex.css"

function pokedex(){
   const [searchTerm,setSearchTerm]=useState('');

  return(
    <div className="pokedex-wrapper">
      
        < Search updateSearchTerm={setSearchTerm}/>
        <PokemonList/>
        
    </div>
  )
}

export default pokedex