import { Pokemon } from '../entities/Pokemon';

export interface IPokemonService {
  getPokemons(offset: number, limit: number): Promise<Pokemon[]>;
  getPokemonDetail(name: string): Promise<any>;
}