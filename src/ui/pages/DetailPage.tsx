import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pokeAPIAdapter } from '../../adapters/PokeAPIAdapter';
import PokemonDetail from '../components/PokemonDetail';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const DetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      if (name) {
        const data = await pokeAPIAdapter.getPokemonDetail(name);
        setPokemon(data);
        setLoading(false);
      } else {
        //TODO add error handling
        console.error('No Pokemon name provided');
      }
    };
    fetchPokemonDetail();
  }, [name]);

  const handleBack = () => navigate('/');

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {pokemon && <PokemonDetail pokemon={pokemon} onBack={handleBack} />}
    </div>
  );
};

export default DetailPage;