import { useEffect ,useState} from "react";
import "./pokemonList.css"
import axios from "axios";
import Pokemon from "../pokemon/pokemon";
function PokemonList(){
      const [pokemonList, setPokemonList] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon/')

      const [nextUrl,setNextUrl] = useState('')
      const [prevUrl,setPrevUrl] = useState('')

    async function downloadPokemons() { 
    setIsLoading(true)

    const response = await axios.get(pokedexUrl);
    const pokemonResults = response.data.results;
    
    console.log(response)
    setNextUrl(response.data.next)
    setPrevUrl(response.data.previous)

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
      
    setPokemonList(res)
    setIsLoading(false)
    }

    useEffect( ()=>{
      downloadPokemons()
    },[pokedexUrl])
    return (
        <div className="pokemon-list-wrapper">
         <div className="pokemon-wrapper">   {(isLoading)?'loading...':pokemonList.map((p)=>(
                <Pokemon name={p.name} image={p.image} key={p.id}/>
            ))}</div>
        <div className="controls"><button disabled = {prevUrl == null} onClick={()=>{
            setPokedexUrl(prevUrl)
        }}>Prev</button>
        <button disabled = {nextUrl == null} onClick={()=>{
            setPokedexUrl(nextUrl)
        }} >Next</button></div>
        </div>


      
    )
}

export default PokemonList