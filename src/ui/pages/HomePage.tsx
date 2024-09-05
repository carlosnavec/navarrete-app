import React, { useState, useEffect } from 'react';
import { pokeAPIAdapter } from '../../adapters/PokeAPIAdapter';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';
import { Pokemon } from '../../core/entities/Pokemon';
import { useNavigate } from 'react-router-dom';
import { NUM_ITEMS_PER_PAGE } from '../../constants/servicesconstants';

import './homepage.scss'
import Spinner from '../components/Spinner';
import ErrorComponent from '../components/error/ErrorComponent';

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isPreviousData, setIsPreviousData] = useState<boolean>(false);
  const [isNextData, setIsNextData] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const data = await pokeAPIAdapter.getPokemons(offset, NUM_ITEMS_PER_PAGE);
        setPokemons(data);
        setIsPreviousData(pokeAPIAdapter.getPreviousData());
        setIsNextData(pokeAPIAdapter.getNextData());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [offset]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const handleNext = () => {
    setLoading(true);
    setOffset(offset + NUM_ITEMS_PER_PAGE);
  }
  const handlePrevious = () => {
      setLoading(true);
      setOffset(Math.max(0, offset - NUM_ITEMS_PER_PAGE));
  }
  const handlePokemonClick = (name: string) => navigate(`/detail/${name}`);

  return (
    <div className='homepage'>
      <h2>Pokemon List</h2>
      <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
      <Pagination onNext={handleNext} onPrevious={handlePrevious} disabledPrevious={!isPreviousData} disabeldNext={!isNextData}/>
    </div>
  );
};

export default HomePage;