export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
    
}

export interface Result {
    name: string;
    url:  string;
    
}

export interface PokemonStat {
    stat: {
      name: string;
    };
    base_stat: number;
  }

  export interface PokemonType {
    type: {
        name: string;
    };
}
  
  export interface PokemonDetailResponse {
    stats: PokemonStat[];
    types: PokemonType[];
  }