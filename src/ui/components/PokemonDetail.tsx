import React from 'react';
import { IPokemonDetail } from '../../core/entities/IPokemonDetail';
import './pokemondetail.scss';
import { Table } from 'navarrete-lib';


interface Props {
  pokemon: IPokemonDetail;
  onBack: () => void;
}

const PokemonDetail: React.FC<Props> = ({ pokemon, onBack }) => {

  const tableAbilityProps = {
    data: pokemon.abilities.map(ability => [ability.ability.name]),
    headers: ['ability'],
  }

  const tableTypesProps = {
    data: pokemon.types.map(type => [type.type.name]),
    headers: ['Types'],
  }

  const tableStatsProps = {
    data: pokemon.stats.map(stat => [stat.stat.name, stat.base_stat]),
    headers: ['Stats', 'Value'],
    height: pokemon.height,
  }
  
  const heigtPokemonFormatted = `Height: ${pokemon.height / 10} m`;
  const weightPokemonFormatted = `Weight: ${pokemon.weight / 10} kg`;

  return (
    <div className='main-detail'>
      <h2>{pokemon.name}</h2>
      <div className='head-detail'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>
          <p>{heigtPokemonFormatted}</p>
          <p>{weightPokemonFormatted}</p>
        </div>
      </div>
      <div>
        <Table {...tableAbilityProps} />
       
      </div>
      <div>
        <Table {...tableTypesProps} />
      </div>
      <div>
        <Table {...tableStatsProps} />
      </div>
      <button onClick={onBack}>{'<< '}Back</button>
    </div>
  );
};

export default PokemonDetail;