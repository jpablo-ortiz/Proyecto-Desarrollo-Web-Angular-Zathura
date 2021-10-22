import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-juego',
  templateUrl: './pantalla-juego.component.html',
  styleUrls: ['./pantalla-juego.component.css']
})
export class PantallaJuegoComponent implements OnInit {

  mensaje: string ="Gracias por jugar Con Zathura Fin Juego.."
  constructor() { }

  ngOnInit(): void {
  }

}
