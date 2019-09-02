import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  heroe: any = {};
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe( params['id']);
    });
    

   }

  ngOnInit() {
  }

}
