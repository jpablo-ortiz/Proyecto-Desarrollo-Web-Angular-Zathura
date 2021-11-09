import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

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

  Registrarse() {

  }

  //getTripulantePorLogin() {
  //  this.tripulanteService.getTripulantePorLogin(this.usuario, this.password).subscribe(
  //    result => {
  //      this.tripulanteActual = result;
  //      this.idTripulante = result.id!;
  //      this.tripulanteService.setIdTripulanteLogeado(this.idTripulante);
  //      this.router.navigate(['/menu']).then(() => {
  //        window.location.reload();
  //      });
  //    },
  //    error => console.log('NO SE ENCONTRÓ TRIPULANTE')
  //  );
  //}

  salir() {

  }

}
