import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../components/models';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    TitleCasePipe,
    NgClass,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(
    public router: Router,
    public pokemonsService: PokemonsService,
    private route: ActivatedRoute,
  ) {}
  pokemon: Pokemon | null = null;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      if (name) {
        this.pokemonsService.loadDetails(name).subscribe((data) => {
          this.pokemon = data;
        });
      }
    });
  }
  getCardClass(pokemon: Pokemon) {
    return pokemon.types[0].type.name;
  }
}
