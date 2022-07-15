import React, { useEffect, useState } from 'react';
import Tabs from '../components/Tabs';

const imagePrefix = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
const tabs = ['Overview', 'Stats', 'Abilities'];

export const DetailsPage = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });
  }, [name]);

  const zeroFilled = pokemon && ('0000' + pokemon.id).slice(-3);

  return (
    <div className='pokemon-page'>
      <div className='sprite-container'>
        <div className='circle'></div>
        <img
          className='sprite'
          src={`${imagePrefix}${zeroFilled}.png`}
          alt=''
          height='500'
        />
      </div>
      <div className='title-container'>
        <span className='pokemon-id'>#{zeroFilled}</span>
        <h1>{name}</h1>
        <p className='type'>
          Type:{' '}
          {pokemon &&
            pokemon.types.map((v, i) => (
              <span key={i}>
                {v.type.name}
                {i === pokemon.types.length - 1 ? null : ', '}
              </span>
            ))}
        </p>
      </div>
      <Tabs
        tabs={tabs}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
    </div>
  );
};
