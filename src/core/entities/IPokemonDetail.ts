import { Ability } from "./Ability";
import { Sprites } from "./Sprites";
import { Stat } from "./Stat";
import { Type } from "./Type";

export interface IPokemonDetail {
  name: string;
  sprites: Sprites;
  abilities: Ability[];
  types: Type[];
  stats: Stat[];
  weight: number;
  height: number;
}