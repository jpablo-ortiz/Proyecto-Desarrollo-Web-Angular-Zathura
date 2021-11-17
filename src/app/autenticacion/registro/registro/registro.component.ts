import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tripulante } from 'src/app/models/tripulante/tripulante';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuario = "";
  public password = "";

  rolCapitan = false;
  rolNavegante = false;
  rolComerciante = false;
  template = true;

  public mensaje = "";

  constructor(
    private tripulanteService: TripulanteService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  checkboxChange(string: string) {
    if (string === 'capitan') {
      this.rolCapitan = true;
      this.rolNavegante = false;
      this.rolComerciante = false;
    } else if (string === 'navegante') {
      this.rolCapitan = false;
      this.rolNavegante = true;
      this.rolComerciante = false;
    } else if (string === 'comerciante') {
      this.rolCapitan = false;
      this.rolNavegante = false;
      this.rolComerciante = true;
    }
  }

  crearNave() {
    var tripulante: Tripulante = new Tripulante();
    tripulante.username = this.usuario;
    tripulante.password = this.password;
    tripulante.capitan = this.rolCapitan;
    tripulante.navegante = this.rolNavegante;
    tripulante.comerciante = this.rolComerciante;
    tripulante.id = null;
    tripulante.nave = null;

    this.tripulanteService.createTripulante(tripulante).subscribe(
      data => {
        var idTripulante = data.id;
        this.router.navigate(['/navecreacion', idTripulante]).then(() => {
          window.location.reload();
        });
      },
      error => this.mensaje= "Error usuario ya existe",
    );
  }

  seleccionarNave() {
    var tripulante: Tripulante = new Tripulante();
    tripulante.username = this.usuario;
    tripulante.password = this.password;
    tripulante.capitan = this.rolCapitan;
    tripulante.navegante = this.rolNavegante;
    tripulante.comerciante = this.rolComerciante;
    tripulante.id = null;
    tripulante.nave = null;

    this.tripulanteService.createTripulante(tripulante).subscribe(
      data => {
        var idTripulante = data.id;
        this.router.navigate(['/buscarnave', idTripulante]).then(() => {
          window.location.reload();
        });
      },
      error => this.mensaje= "Error usuario ya existe",
    );
  }

}
