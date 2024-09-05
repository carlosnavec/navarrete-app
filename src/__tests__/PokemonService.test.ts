import axios from 'axios';
import { PokemonService } from '../core/services/PokemonService';
import { POKE_API_URL } from '../constants/servicesconstants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    service = new PokemonService();
  });

  it('should fetch a list of pokemons', async () => {
    const pokemons = [{ name: 'bulbasaur' }, { name: 'ivysaur' }];
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        results: pokemons,
        previous: null,
        next: 'next-url',
      },
    });

    const result = await service.getPokemons(0, 2);

    expect(result).toEqual(pokemons);
    expect(service.getPreviousData()).toBe(false);
    expect(service.getNextData()).toBe(true);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${POKE_API_URL}/pokemon?offset=0&limit=2`);
  });

  it('should fetch pokemon details', async () => {
    const pokemonDetail = { name: 'bulbasaur', height: 7, weight: 69 };
    mockedAxios.get.mockResolvedValueOnce({ data: pokemonDetail });

    const result = await service.getPokemonDetail('bulbasaur');

    expect(result).toEqual(pokemonDetail);
    expect(mockedAxios.get).toHaveBeenCalledWith(`${POKE_API_URL}/pokemon/bulbasaur`);
  });
});