import React from 'react';
import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import PokemonDetail from '../ui/components/PokemonDetail';

const mockPokemon = {
  name: 'Pikachu',
  height: 40,
  weight: 60,
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  stats: [
    { stat: { name: 'hp' }, base_stat: 35 },
    { stat: { name: 'attack' }, base_stat: 55 },
  ],
  abilities: [
    { ability: { name: 'static' } },
    { ability: { name: 'lightning-rod' } },
  ],
  types: [
    { type: { name: 'electric' } },
  ],
};

const mockOnBack = jest.fn();

describe('PokemonDetail', () => {
  test('renders PokemonDetail component', () => {
    render(<PokemonDetail pokemon={mockPokemon} onBack={mockOnBack} />);

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', mockPokemon.sprites.front_default);
    expect(screen.getByText('Height: 4 m')).toBeInTheDocument();
    expect(screen.getByText('Weight: 6 kg')).toBeInTheDocument();

    // Check if the stats table is rendered
    expect(screen.getByText('Stats')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
    expect(screen.getByText('hp')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
    expect(screen.getByText('attack')).toBeInTheDocument();
    expect(screen.getByText('55')).toBeInTheDocument();

    // Check if the back button is rendered
    expect(screen.getByText('<< Back')).toBeInTheDocument();
  });

  test('calls onBack when back button is clicked', () => {
    render(<PokemonDetail pokemon={mockPokemon} onBack={mockOnBack} />);
    const backButton = screen.getByText('<< Back');
    backButton.click();
    expect(mockOnBack).toHaveBeenCalled();
  });
});