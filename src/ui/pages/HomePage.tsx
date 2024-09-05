import React, { useState, useEffect } from 'react';
import { pokeAPIAdapter } from '../../adapters/PokeAPIAdapter';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';
import { Pokemon } from '../../core/entities/Pokemon';
import { useNavigate } from 'react-router-dom';
import { NUM_ITEMS_PER_PAGE } from '../../constants/servicesconstants';

import './homepage.scss'

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await pokeAPIAdapter.getPokemons(offset, NUM_ITEMS_PER_PAGE);
      setPokemons(data);
    };
    fetchPokemons();
  }, [offset]);

  const handleNext = () => setOffset(offset + NUM_ITEMS_PER_PAGE);
  const handlePrevious = () => setOffset(Math.max(0, offset - NUM_ITEMS_PER_PAGE));
  const handlePokemonClick = (name: string) => navigate(`/detail/${name}`);

  return (
    <div className='homepage'>
      <h2>Pokemon List</h2>
      <PokemonList pokemons={pokemons} onPokemonClick={handlePokemonClick} />
      <Pagination onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
};

export default HomePage;