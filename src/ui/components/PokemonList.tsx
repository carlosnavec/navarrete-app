import React from 'react';
import { Pokemon } from '../../core/entities/Pokemon';
import { Table } from 'navarrete-lib';

interface Props {
  pokemons: Pokemon[];
  onPokemonClick: (name: string) => void;
}

const PokemonList: React.FC<Props> = ({ pokemons, onPokemonClick }) => {

  // Transformar los datos de Pokemon a ReactNode[][]
  const tableData: React.ReactNode[][] = pokemons.map(pokemon => [pokemon.name]);
  console.log(tableData);
  return (
    <>
     <Table data={tableData} headers={['name']}/>
    </>
    // <div>
    //   <ul>
    //     {pokemons.map((pokemon) => {
    //       const isLink = typeof pokemon.name === 'string' && pokemon.name.includes('https://');
    //       console.log(isLink);
    //       return (
    //       <li key={pokemon.name} onClick={() => onPokemonClick(pokemon.name)}>
    //         {pokemon.name}
    //       </li>
    //     )})}
    //   </ul>
    // </div>
  );
};

export default PokemonList;