import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-tripulacion',
  templateUrl: './info-tripulacion.component.html',
  styleUrls: ['./info-tripulacion.component.css']
})
export class InfoTripulacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  trip:string = "Tripulación Rayo";
  jug2: string = "Jugador 2";
  jug3: string = "Jugador 3";
}
