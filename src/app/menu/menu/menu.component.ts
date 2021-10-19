import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //viajarAEstrellas(){
    //llamar metodo para la pantalla de Estrellas

  //}
  // nombre nave
  nave: string = "Rayo MAQUEN";
}
