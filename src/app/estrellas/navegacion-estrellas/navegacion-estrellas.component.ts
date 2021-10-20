import { Component, OnInit } from '@angular/core';
import { Estrella } from 'src/app/models/estrella/estrella';
import { EstrellaService } from 'src/app/shared/services/estrella/estrella.service';

@Component({
  selector: 'app-navegacion-estrellas',
  templateUrl: './navegacion-estrellas.component.html',
  styleUrls: ['./navegacion-estrellas.component.css']
})
export class NavegacionEstrellasComponent implements OnInit {

  public estrellas: Estrella[] = [];
  //Estrella que selecciono el jugador para viajar a x estrella
  public estrellaViaje:Estrella = new Estrella(); 

  constructor(private estrellaService: EstrellaService) { }

  ngOnInit(): void {
    this.estrellaService.get10NearestEstrellas(6).subscribe(
      estrellas => {
        this.estrellas = estrellas;
      },
    );
  }

  public actualizarEstrella(id: number) {
    this.estrellaViaje.id = id; 
    this.estrellaService.updateEstrella(this.estrellaViaje).subscribe();
  }


  
}
