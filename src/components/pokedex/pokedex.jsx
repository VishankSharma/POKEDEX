import { useState } from "react";
import Pokemon from "../pokemon/pokemon"
import PokemonList from "../pokemonList/pokemonList"
import Search from "../search/search"
import "./pokedex.css"
import PokemonDetails from "../pokemonDetails.jsx/pokemonDetails";

function pokedex(){
   const [searchTerm,setSearchTerm]=useState('');

  return(
    <div className="pokedex-wrapper">
      
        < Search updateSearchTerm={setSearchTerm}/>
      {(!searchTerm) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        
    </div>
  )
}

export default pokedex