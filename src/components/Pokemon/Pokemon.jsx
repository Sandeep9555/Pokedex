import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({ name, image, id }) => {
  return (
    <div className='pokemon-wrapper'>
      <Link to={`/pokemon/${id}`}>
        <div className='pokemon-name'>{name}</div>
        <div className='pokemon-image'>
          <img className="pokemon-image" src={image} alt={`${name} Sprite`} />
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
