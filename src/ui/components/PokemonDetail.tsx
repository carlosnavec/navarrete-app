import React from 'react';

interface Props {
  pokemon: any;
  onBack: () => void;
}

const PokemonDetail: React.FC<Props> = ({ pokemon, onBack }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default PokemonDetail;