import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-nave',
  templateUrl: './info-nave.component.html',
  styleUrls: ['./info-nave.component.css']
})
export class InfoNaveComponent implements OnInit {

  public title: string = "Datos nave";
  @Input() public creditosNave?: number = 0;
  @Input() public tiempoNave?: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
