import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList( ) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:''

      });

    async function downloadPokemons(url) { 
    
    setPokemonListState((state)=>({...state, isLoading:true}));

    const response = await axios.get(url);
    const pokemonResults = response.data.results;
    const pokemonResultPromise = pokemonResults.map((pokemon)=>{
    return axios.get(pokemon.url)
       })
    const pokemonData = await axios.all(pokemonResultPromise);
    console.log(pokemonData);
      
     const res =
        pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;  
          return {
            id : pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            types: pokemon.types,
          };
        })
      
    setPokemonListState((state)=>({...state,
      pokemonList:res,
      isLoading:false,
      nextUrl:response.data.next,
      prevUrl:response.data.previous}))
    }

    useEffect( ()=>{
      downloadPokemons(pokemonListState.pokedexUrl)
    },[pokemonListState.pokedexUrl]);

    return [pokemonListState,setPokemonListState]

}

export default usePokemonList