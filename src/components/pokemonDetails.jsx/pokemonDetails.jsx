import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./pokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}) {
  const { id } = useParams();
  const [pokemon] = usePokemonDetails(id,pokemonName);

  if (!pokemon) {
    return <div className="pokemon-details-wrapper">Loading...</div>;
  }

  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-detail-name">{pokemon.name}</div>
      <img
        className="pokemon-details-image"
        src={pokemon.image}
        alt={pokemon.name}
      />
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types.map((t) => (
          <div key={t}>Type: {t}</div>
        ))}
      </div>

      {pokemon.types && (
        <div>
          MORE {pokemon.types[0]} TYPE POKEMON
          <ul>
            {pokemon.firstFive
              .filter((p) => p.pokemon.name !== pokemon.name)
              .map((p) => {
                const pokeId = p.pokemon.url.split("/").filter(Boolean).pop();
                return (
                  <li key={p.pokemon.url}>
                    <Link to={`/pokemon/${pokeId}`}>{p.pokemon.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
