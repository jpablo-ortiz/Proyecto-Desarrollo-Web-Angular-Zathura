import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from 'src/app/models/planeta/planeta';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
import { PlanetaService } from './../../shared/services/planeta/planeta.service';

@Component({
  selector: 'app-navegacion-planetas',
  templateUrl: './navegacion-planetas.component.html',
  styleUrls: ['./navegacion-planetas.component.css']
})
export class NavegacionPlanetasComponent implements OnInit {

  public estrellaId: number;
  public planetas: Planeta[] = [];
  public planetaActual: Planeta = new Planeta();
  public estaEnEstrellaActual: boolean = false;

  constructor(private planetaService: PlanetaService, private tripulanteService: TripulanteService, private route: ActivatedRoute) {
    this.estrellaId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getPlanetas(this.estrellaId!);
  }

  public getPlanetas(idEstrella: number) {
    this.planetaService.getPlanetasByEstrella(idEstrella).subscribe(
      planetas => {
        this.planetas = planetas;
        this.getPlanetaActual();
      }
    );
  }

  // Realizar consulta para obtener el tripulante actual
  public getPlanetaActual() {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getPlanetaActualTripulante(idTripulanteActual).subscribe(
      planeta => {
        this.planetaActual = planeta;
        for (let i = 0; i < this.planetas.length; i++) {
          const element = this.planetas[i];

          if (element.id == this.planetaActual.id) {
            this.estaEnEstrellaActual = true;
          }
        }
        if (this.estaEnEstrellaActual) {
          console.log(this.planetas);
          this.planetas = this.planetas.filter((planeta => planeta.id != this.planetaActual.id));
          console.log(this.planetas);
        }
      }
    );
  }

}
