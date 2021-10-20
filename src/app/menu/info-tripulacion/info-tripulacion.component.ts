import { Component, Input, OnInit } from '@angular/core';
import { Tripulante } from 'src/app/models/tripulante/tripulante';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-info-tripulacion',
  templateUrl: './info-tripulacion.component.html',
  styleUrls: ['./info-tripulacion.component.css']
})
export class InfoTripulacionComponent implements OnInit {

  @Input() naveId: number = 0;
  @Input() tripulanteActualId: number = 0;


  public tripulantes: Tripulante[] = [];

  constructor(private tripulanteService: TripulanteService) { }

  ngOnInit(): void {
    this.getTripulates(this.naveId);
  }

  // Obtener tripulantes de la nave actual
  public getTripulates(idNave: number) {
    this.tripulanteService.getTripulantesByNaveId(idNave).subscribe(
      tripulantes => {
        tripulantes.filter(tripulante => {
          if (tripulante.id !== this.tripulanteActualId) {
            this.tripulantes.push(tripulante);
          }
        });
      }
    );
  }

}
