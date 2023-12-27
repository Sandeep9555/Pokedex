import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
  const [pokemonList,setPokemonList]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
   const [pokedexUrl,setPokedexUrl]=useState("https://pokeapi.co/api/v2/pokemon");

   const [nextUrl,setNextUrl]=useState('');
   const [prevUrl,setPrevUrl]=useState('');
   
    async function downloadPokemons() {
        const response = await axios.get(pokedexUrl);

        const pokemonResults = response.data.results;

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        //iterating over the array of pokemons, and using their url,to create an array of promises

        //that will download those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        //passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        //arrya of 20 pokemon detailed data

        // now iterate  on the each pokemon, and extract id, name,image,types 
        const PokelistResult=pokemonData.map((pokeData)=>{
          const pokemon=pokeData.data;
          return{
            id:pokemon.id,
            name:pokemon.name,
            image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
            types:pokemon.types
          }
        })
        setPokemonList(PokelistResult);
        setIsLoading(false);
    }

    useEffect(() => {
        async function fetchData() {
            await downloadPokemons();
        }
        fetchData();
    }, [pokedexUrl]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
            {isLoading ? 'Loading..' :pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}  id={p.id}/>) }
            </div>
            <div className="controls">
              <button  disabled={prevUrl==null} onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
              <button  disabled={nextUrl==null} onClick={()=>setPokedexUrl(nextUrl)} >Next</button>
            </div>
           
        </div>
    );
}

export default PokemonList;
