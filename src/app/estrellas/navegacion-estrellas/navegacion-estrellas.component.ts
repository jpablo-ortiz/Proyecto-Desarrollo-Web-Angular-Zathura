import { Component, OnInit } from '@angular/core';
import { Estrella } from 'src/app/models/estrella/estrella';
import { EstrellaService } from 'src/app/shared/services/estrella/estrella.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-navegacion-estrellas',
  templateUrl: './navegacion-estrellas.component.html',
  styleUrls: ['./navegacion-estrellas.component.css']
})
export class NavegacionEstrellasComponent implements OnInit {

  public estrellas: Estrella[] = [];

  constructor(private estrellaService: EstrellaService, private tripulanteService: TripulanteService) { }

  ngOnInit(): void {
    this.getEstrellaActual();
  }

  // Realizar consulta para obtener el tripulante actual
  public getEstrellaActual() {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getEstrellaActualTripulante(idTripulanteActual).subscribe(
      estrella => {
        this.get10EstrellasMasCercanas(estrella.id!);
      }
    );
  }

  public get10EstrellasMasCercanas(idEstrellaActual: number) {
    this.estrellaService.get10NearestEstrellas(idEstrellaActual).subscribe(
      estrellas => {
        this.estrellas = estrellas;
      },
    );
  }
}
