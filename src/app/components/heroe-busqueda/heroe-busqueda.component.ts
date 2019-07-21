import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe-busqueda',
  templateUrl: './heroe-busqueda.component.html'
})
export class HeroeBusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  hayDC: boolean;
  hayMarvel: boolean;


  constructor(private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {

      this.heroes = this._heroesService.buscarHeroes(params['busqueda']);
      this.hayDC = this._heroesService.getHayDC();
      this.hayMarvel = this._heroesService.getHayMarvel();

    });
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  }

}
