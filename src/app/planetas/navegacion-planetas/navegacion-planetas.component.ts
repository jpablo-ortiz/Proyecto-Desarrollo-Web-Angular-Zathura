import { Planeta } from 'src/app/models/planeta/planeta';
import { PlanetaService } from './../../shared/services/planeta/planeta.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navegacion-planetas',
  templateUrl: './navegacion-planetas.component.html',
  styleUrls: ['./navegacion-planetas.component.css']
})
export class NavegacionPlanetasComponent implements OnInit {
  //private route: ActivatedRoute
  estrellaId: number = 9;
  planetaActualId: number= 142;
  public planetas: Planeta[] = [];
  constructor(private planetaService: PlanetaService) { }


  ngOnInit(): void {
    //this.estrellaId = + this.route.snapshot.paramMap.get('id');
    this.getPlanetas(this.estrellaId);
  }

public getPlanetas(idEstrella:number){
  this.planetaService.getPlanetasByEstrella(idEstrella).subscribe(
    planetas => {
      planetas.filter(planeta => {
        if (planeta.id !== this.planetaActualId) {
          this.planetas.push(planeta);
        }
      });
    }
  );


}


public actualizarPlaneta(id:number){

}

}
