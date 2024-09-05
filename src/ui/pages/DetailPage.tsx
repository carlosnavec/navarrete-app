import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { pokeAPIAdapter } from '../../adapters/PokeAPIAdapter';
import PokemonDetail from '../components/PokemonDetail';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/error/ErrorComponent';

const DetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemonDetail = async () => {
       try {
        if (name) {
          const data = await pokeAPIAdapter.getPokemonDetail(name);
          setPokemon(data);
          setLoading(false);
        } else {
          console.error('No Pokemon name provided');
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching Pokemon detail:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonDetail();
  }, [name]);

  const handleBack = () => navigate('/');

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorComponent />;
  }


  return (
    <div>
      {pokemon && <PokemonDetail pokemon={pokemon} onBack={handleBack} />}
    </div>
  );
};

export default DetailPage;