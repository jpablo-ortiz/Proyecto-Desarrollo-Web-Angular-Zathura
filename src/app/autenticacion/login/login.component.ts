import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tripulante } from 'src/app/models/tripulante/tripulante';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public idTripulante: number = 0;
  public tripulanteActual: Tripulante = new Tripulante();
  public usuario = '';
  public password = '';
  public sesionIniciada = false;
  public mensaje!: string;

  constructor(
    private tripulanteService: TripulanteService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  Ingresar() {
    this.sesionIniciada = this.tripulanteService.isAuth();
    console.log(this.sesionIniciada);

    if (this.sesionIniciada) {
      this.mensaje = 'Error: Ya hay una sesión iniciada';
    }
    else {
      this.tripulanteService.login(this.usuario, this.password).subscribe(
        result => {
          this.mensaje = 'Inicio de sesion correcto';
          sessionStorage.setItem('Auth', 'true');
          // hacer un sleep del código para que se vea el mensaje
          this.getTripulantePorLogin();
        },
        error => this.mensaje = 'Nombre de usario o Contraseña Incorrectos, por favor intente nuevamente'
      );
    }
  }

  getTripulantePorLogin() {
    this.tripulanteService.getTripulantePorLogin(this.usuario, this.password).subscribe(
      result => {
        this.tripulanteActual = result;
        this.idTripulante = result.id!;
        this.tripulanteService.setIdTripulanteLogeado(this.idTripulante);

        var rol = "";
        if (this.tripulanteActual.capitan == true) {
          rol = "Capitan"
        }
        else if (this.tripulanteActual.navegante == true) {
          rol = "Navegante"
        }
        else if (this.tripulanteActual.comerciante == true) {
          rol = "Comerciante"
        }

        this.tripulanteService.setRolTripulanteLogeado(rol);

        this.router.navigate(['/menu']).then(() => {
          window.location.reload();
        });
      },
      error => console.log('NO SE ENCONTRÓ TRIPULANTE')
    );
  }
}

