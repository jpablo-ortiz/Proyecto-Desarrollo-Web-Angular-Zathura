import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public estrellaActual: Estrella = new Estrella();

  public sePuedeViajar: number = 0;
  public mensaje: string = "";

  constructor(
    private estrellaService: EstrellaService,
    private tripulanteService: TripulanteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEstrellaActual();
  }

  // Realizar consulta para obtener el tripulante actual
  public getEstrellaActual() {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getEstrellaActualTripulante(idTripulanteActual).subscribe(
      estrella => {
        this.estrellaActual = estrella;
        this.get10EstrellasMasCercanas(estrella.id!);
      }
    );
  }

  public get10EstrellasMasCercanas(idEstrellaActual: number) {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.estrellaService.get10NearestEstrellas(idEstrellaActual).subscribe(
      estrellas => {
        this.estrellas = estrellas;
        this.estrellaService.verificarViaje(idEstrellaActual, estrellas[0].id!, idTripulanteActual).subscribe(
          res => {
            if (res) {
              this.sePuedeViajar = 1;
            } else {
              this.sePuedeViajar = 2;
            }
          }
        );
      },
    );
  }

  public viajeAEstrella(idEstrellaActual: number, idEstrella: number) {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.estrellaService.viajarEntreEstrellas(idEstrellaActual, idEstrella, idTripulanteActual).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/planeta/estrella', idEstrella]);
        }
        else {
          this.mensaje = "No se puede viajar a esta estrella por motivos del tiempo límite de la nave.";
          this.router.navigate(['/mensaje', this.mensaje]);
        }
      },
    );
  }
}
