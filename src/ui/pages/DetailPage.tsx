import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pokeAPIAdapter } from '../../adapters/PokeAPIAdapter';
import PokemonDetail from '../components/PokemonDetail';
import { useNavigate } from 'react-router-dom';

const DetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      if (name) {
        const data = await pokeAPIAdapter.getPokemonDetail(name);
        setPokemon(data);
      } else {
        //TODO add error handling
        console.error('No Pokemon name provided');
      }
     
    };
    fetchPokemonDetail();
  }, [name]);

  const handleBack = () => navigate('/');

  return (
    <div>
      {pokemon && <PokemonDetail pokemon={pokemon} onBack={handleBack} />}
    </div>
  );
};

export default DetailPage;