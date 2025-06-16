import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pokemonDetils.css'

function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);

  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.front_default,
      types: response.data.types.map((t) => t.type.name),
      height: response.data.height,
      weight: response.data.weight,
    });
  }

  useEffect(() => {
    downloadPokemon();
  }, [id]);

  if (!pokemon) {
    return <div className="pokemon-details-wrapper">Loading...</div>;
  }

  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-detail-name"> {pokemon.name}</div>
      <img className="pokemon-details-image" src={pokemon.image} alt={pokemon.name} />
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types.map((t) => (
          <div key={t}>Type: {t}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;
