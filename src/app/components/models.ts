export interface ApiResponse {
  count: number;
  next: string;
  previous?: any;
  results: Array<PokemonInfo>;
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  types: Array<Type>;
  weight: number;
}

interface Type {
  slot: number;
  type: Detail;
}

interface Sprites {
  back_default: string;
  front_default: string;
  versions: Versions;
}

interface Versions {
  'generation-v': Generationv;
}

interface Generationv {
  'black-white': BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

interface Detail {
  name: string;
  url: string;
}
