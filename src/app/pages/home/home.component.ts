import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { MatListModule } from '@angular/material/list';
import { PokemonInfo } from '../../components/models';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemons: Array<PokemonInfo> = [];
  
  constructor(public router: Router, public pokemonsService: PokemonsService) {
    this.pokemonsService.loadPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    })
  }
}
