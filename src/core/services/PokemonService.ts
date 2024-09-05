import { IPokemonService } from '../interfaces/IPokemonService';
import { Pokemon } from '../entities/Pokemon';
import axios from 'axios';
import { POKE_API_URL } from '../../constants/servicesconstants';

export class PokemonService implements IPokemonService {
  private apiUrl = POKE_API_URL

  async getPokemons(offset: number, limit: number): Promise<Pokemon[]> {
    const response = await axios.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    return response.data.results;
  }

  async getPokemonDetail(name: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
    return response.data;
  }
}