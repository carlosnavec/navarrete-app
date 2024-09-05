import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonList from './../ui/components/PokemonList';

interface Pokemon {
  name: string;
}

const mockPokemons: Pokemon[] = [
  { name: 'Pikachu' },
  { name: 'Charmander' },
  { name: 'Bulbasaur' },
];

const mockOnPokemonClick = jest.fn();

describe('PokemonList', () => {
  test('renders PokemonList component with pokemon names', () => {
    render(<PokemonList pokemons={mockPokemons} onPokemonClick={mockOnPokemonClick} />);

    // Verificar que los nombres de los Pokémon se renderizan correctamente
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  test('calls onPokemonClick when a pokemon name is clicked', () => {
    render(<PokemonList pokemons={mockPokemons} onPokemonClick={mockOnPokemonClick} />);

    // Simular un clic en el nombre de un Pokémon
    fireEvent.click(screen.getByText('Pikachu'));
    expect(mockOnPokemonClick).toHaveBeenCalledWith('Pikachu');

    fireEvent.click(screen.getByText('Charmander'));
    expect(mockOnPokemonClick).toHaveBeenCalledWith('Charmander');

    fireEvent.click(screen.getByText('Bulbasaur'));
    expect(mockOnPokemonClick).toHaveBeenCalledWith('Bulbasaur');
  });
});