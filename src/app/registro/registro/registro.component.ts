import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public usuario ="username";
  public password ="contraseña";
  public rolCapitan = false;
  public rolNavegante = false;
  public rolComerciante = false;

  constructor() { }

  ngOnInit(): void {
  }

Registrarse(){

  

}
salir(){

}


}
