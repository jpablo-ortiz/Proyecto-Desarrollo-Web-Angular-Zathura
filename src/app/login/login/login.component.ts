import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tripulante} from 'src/app/models/tripulante/tripulante';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public idTripulante:number = 0;
  public tripulanteActual: Tripulante = new Tripulante();
  public usuario = 'username';
  public password = 'contraseña';
  public sesionIniciada = false;

  public mensaje!: String;
  public mensaje2!: string;

  constructor(private tripulanteService: TripulanteService, private route: ActivatedRoute) { }

  ngOnInit(): void {

   // this.tripulanteService.getTripulantePorLogin(this.usuario,this.password);
  }

  Ingresar() {
    this.sesionIniciada = this.isAuth();
    console.log(this.sesionIniciada);

    if (this.sesionIniciada) {
      this.mensaje = 'Error: Ya hay una sesión iniciada';
    }
    else {
      sessionStorage.setItem('Auth', 'true');
      this.tripulanteService.login(this.usuario, this.password).subscribe(
        result => {
          this.mensaje = 'Inicio de sesion correcto';
          this.getTripulantePorLogin();
        },
        error => this.mensaje = 'Nombre de usario o Contraseña Incorrectos, por favor intente nuevamente'
      );
    }
  }

  isAuth(): boolean {
    if (sessionStorage.getItem('Auth') != null && sessionStorage.getItem('Auth') === 'true') {
      return true;
    }
    else {
      return false;
    }
  }


  getTripulantePorLogin(){
    this.tripulanteService.getTripulantePorLogin(this.usuario, this.password).toPromise().then(
      result => {
        this.tripulanteActual = result;
      },
      error => console.log('NO SE ENCONTRÓ TRIPULANTE')
    );
  }


  salir() {
    this.sesionIniciada = this.isAuth();
    console.log(this.sesionIniciada);

    if (this.sesionIniciada) {
      sessionStorage.setItem('Auth', 'false');
      this.tripulanteService.logout().toPromise().then(
        data => {
          // tslint:disable-next-line: no-unused-expression
          sessionStorage.clear;
          this.mensaje = 'Sesion cerrada correctamente';
        },
        error => this.mensaje = 'Error'
      );
    }
    else {
      this.mensaje = 'Error: No hay una sesion abierta';
    }
  }

}
