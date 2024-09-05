import { IPokemonService } from '../interfaces/IPokemonService';
import { Pokemon } from '../entities/Pokemon';
import axios from 'axios';
import { POKE_API_URL } from '../../constants/servicesconstants';

export class PokemonService implements IPokemonService {
  private apiUrl = POKE_API_URL;
  private isPreviousData = false;
  private isNextData = false;;

  async getPokemons(offset: number, limit: number): Promise<Pokemon[]> {
    const response = await axios.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
    this.setPreviousData(response.data.previous !== null);
    this.setNextData(response.data.next !== null);
    return response.data.results;
  }

  async getPokemonDetail(name: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
    return response.data;
  }

  private setPreviousData(isPreviousData: boolean): void {
    this.isPreviousData = isPreviousData;
  }

  private setNextData(isNextData: boolean): void {
    this.isNextData = isNextData;
  }

  public getPreviousData(): boolean {
    return this.isPreviousData;
  }

  public getNextData(): boolean {
    return this.isNextData;
  }
}