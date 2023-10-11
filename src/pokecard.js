import React from 'react';
import './pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
      <div className="Pokecard">
        <div className="Pokecard-title">{ props.name }</div>
        <img className="Pokecard-image" src={imgSrc} />
        <div className="Pokecard-data">Type: {props.type}</div>
        <div className="Pokecard-data">EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;
