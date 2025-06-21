import { useEffect ,useState} from "react";
import "./pokemonList.css"
import axios from "axios";
import Pokemon from "../pokemon/pokemon";

function PokemonList(){
      const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading:true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon/',
        nextUrl:'',
        prevUrl:''

      });

    async function downloadPokemons() { 
    setPokemonListState({...pokemonListState, isLoading:true});

    const response = await axios.get(pokemonListState.pokedexUrl);
    const pokemonResults = response.data.results;
    
    console.log(response.data)

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
      
    setPokemonListState({...pokemonListState,
      pokemonList:res,
      isLoading:false,
      nextUrl:response.data.next,
      prevUrl:response.data.previous})
    }

    useEffect( ()=>{
      downloadPokemons()
    },[pokemonListState.pokedexUrl])

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