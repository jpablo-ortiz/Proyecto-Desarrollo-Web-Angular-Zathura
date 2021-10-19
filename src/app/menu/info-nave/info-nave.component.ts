import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-nave',
  templateUrl: './info-nave.component.html',
  styleUrls: ['./info-nave.component.css']
})
export class InfoNaveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Datos nave";
  creditosNave ="5222";
  tiempoNave = 5986;
}
