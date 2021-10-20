import { Component, OnInit } from '@angular/core';
import { Tripulante } from 'src/app/models/tripulante/tripulante';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Tripulante por id, Nave, lista de tripulante
  public actual: Tripulante = new Tripulante();
  public nave?: string = "hola"
  public tripulantes: Tripulante[] = [];
  public rolTrip: string = "hr";

  constructor(private tripulanteService: TripulanteService) { }

  public ngOnInit(): void {
    this.getTripulanteActual();
  }

  // Realizar consulta para obtener el tripulante actual
  public getTripulanteActual() {
    this.tripulanteService.getTripulante(3).subscribe(
      tripulante => {
        this.actual = tripulante;
        this.nave = tripulante.nave?.nombre;
        if (tripulante.capitan == true){
            this.rolTrip = "capitan"
        }
        else if (tripulante.navegante == true) {
          this.rolTrip = "Navegante"
        }
        else if (tripulante.comerciante == true) {
          this.rolTrip = "Comerciante"
        }
      }
    );
  }



}
