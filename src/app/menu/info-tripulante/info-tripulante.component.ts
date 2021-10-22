import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-tripulante',
  templateUrl: './info-tripulante.component.html',
  styleUrls: ['./info-tripulante.component.css']
})
export class InfoTripulanteComponent implements OnInit {

  @Input() jug: string = "Nombre del Jugador";
  @Input() rolJug : string = "rol";

  constructor() { }

  ngOnInit(): void {


  }

}
