import React from 'react';
import { Pokemon } from '../../core/entities/Pokemon';
import { Table } from 'navarrete-lib';

interface Props {
  pokemons: Pokemon[];
  onPokemonClick: (name: string) => void;
}

const PokemonList: React.FC<Props> = ({ pokemons, onPokemonClick }) => {

  const tableProps = {
    data: pokemons.map(pokemon => [pokemon.name]),
    headers: ['name'],
    onContentCellClick: (name: string) => onPokemonClick(name)
  }

  return (
    <>
     <Table {...tableProps}/>
    </>
  );
};

export default PokemonList;