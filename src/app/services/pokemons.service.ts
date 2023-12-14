import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Pokemon, PokemonInfo } from '../components/models';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  loadPokemons(): Observable<Array<PokemonInfo>> {
    return this.http
      .get<ApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(
        map((data) => {
          console.log(data);
          return data.results;
        }),
      );
  }

  loadDetails(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  allFavorites: Array<Pokemon> = [];

  isItInHere(pokemon: Pokemon): boolean {
    for (let i = 0; i < this.allFavorites.length; i++) {
      if (pokemon.name === this.allFavorites[i].name) {
        return true;
      }
    }
    return false;
  }

  favoriet(pokemon: Pokemon) {
    if (!this.isItInHere(pokemon)) {
      this.allFavorites.push(pokemon);
    }
    this.savePokemons();
  }

  deleteFavoriet(pokemon: Pokemon): void {
    if (this.isItInHere(pokemon)) {
      for (let i = 0; i < this.allFavorites.length; i++) {
        if (this.allFavorites[i].name === pokemon.name) {
          this.allFavorites.splice(i, 1);
        }
      }
    }
    this.savePokemons();
  }

  favoriteName(pokemon: PokemonInfo): boolean {
    for (let i = 0; i < this.allFavorites.length; i++) {
      if (pokemon.name === this.allFavorites[i].name) {
        return true;
      }
    }
    return false;
  }

  private savePokemons() {
    localStorage.setItem('pokemons', JSON.stringify(this.allFavorites));
  }

  loadHeroes() {
    const pokemons = localStorage.getItem('pokemons');
    if (pokemons) {
      this.allFavorites = JSON.parse(pokemons);
    }
  }

  toUpperCase(pokemon: string) {
    return pokemon[0].toUpperCase() + pokemon.substring(1);
  }
}
