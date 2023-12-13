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
        })
      );
  }

  loadDetails(name: string){
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
