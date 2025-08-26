import { useEffect ,useState} from "react";
import "./pokemonList.css"
import axios from "axios";
import Pokemon from "../pokemon/pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList(){
    
   const [pokemonListState,setPokemonListState] = usePokemonList( );

    return (

        <div className="pokemon-list-wrapper">
         <div className="pokemon-wrapper">   {(pokemonListState.isLoading)?'loading...':pokemonListState.pokemonList.map((p)=>(
                <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>
            ))}</div>
        <div className="controls"><button disabled = {pokemonListState.prevUrl == null} onClick={()=>{
           setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})
        }}>Prev</button>
        <button disabled = {pokemonListState.nextUrl == null} onClick={()=>{
            setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})
        }} >Next</button></div>
        </div>
      
    )
}

export default PokemonList