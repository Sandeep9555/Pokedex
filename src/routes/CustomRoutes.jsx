import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
const CustomRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Pokedex />}></Route>
        <Route path='/Pokemon/:id' element={<PokemonDetails />}></Route>
    </Routes>
  );
}

export default CustomRoutes