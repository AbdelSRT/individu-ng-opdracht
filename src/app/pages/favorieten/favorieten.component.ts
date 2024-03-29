import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-favorieten',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule,TitleCasePipe],
  templateUrl: './favorieten.component.html',
  styleUrl: './favorieten.component.css',
})
export class FavorietenComponent {
  constructor(
    public pokemonsService: PokemonsService,
    public router: Router,
  ) {}
}
