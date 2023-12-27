import React from 'react'
import Search from '../Search/Search'
// css import
import './Pokedex.css';
import Pkemonlist from '../Pokemonlist/PokemonList';

const Pokedex = () => {
  return (

    <div className='pokedex-wrapper
    '>
        
        <Search />
        <Pkemonlist />
    </div>
  )
}

export default Pokedex