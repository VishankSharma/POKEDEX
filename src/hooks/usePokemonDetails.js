import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";


function usePokemonDetails (id) {
  const [pokemon, setPokemon] = useState(null);

  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data.types[0].type.name);
    const similarType = await axios.get( `https://pokeapi.co/api/v2/type/${ response ? response.data.types[0].type.name : 'fire' }`)
    const firstFive = similarType.data.pokemon.slice(0,5);
    console.log(firstFive)
    const types = response.data.types.map((t) => t.type.name);

    setPokemon({
      name: response.data.name,
      image: response.data.sprites.front_default,
      types: types,
      height: response.data.height,
      weight: response.data.weight,
      firstFive : firstFive 
    });

 
  }

  useEffect(() => {
    downloadPokemon();
  }, [id]);
  
  return [pokemon]
  
}

export default usePokemonDetails