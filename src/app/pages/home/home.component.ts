import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { MatListModule } from '@angular/material/list';
import { Pokemon, PokemonInfo } from '../../components/models';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule,TitleCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemons: Array<PokemonInfo> = [];

  constructor(
    public router: Router,
    public pokemonsService: PokemonsService,
  ) {
    this.pokemonsService.loadPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
    });
  }
}
