import { IPokemonService } from '../interfaces/IPokemonService';
import { Pokemon } from '../entities/Pokemon';
import axios from 'axios';

export class PokemonService implements IPokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  async getPokemons(offset: number, limit: number): Promise<Pokemon[]> {
    const response = await axios.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetail(name: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
    return response.data;
  }
}