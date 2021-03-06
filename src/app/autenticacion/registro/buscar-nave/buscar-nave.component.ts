import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nave } from 'src/app/models/nave/nave';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-buscar-nave',
  templateUrl: './buscar-nave.component.html',
  styleUrls: ['./buscar-nave.component.css']
})
export class BuscarNaveComponent implements OnInit {

  public naves: Nave[] = [];

  public idTripulante: number;
  public naveActual = new Nave(undefined, "Seleccione la Nave");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private naveService: NaveService,
    private tipulanteService: TripulanteService,
  ) {
    this.idTripulante = Number(this.route.snapshot.paramMap.get('idTripulante'));
  }

  ngOnInit(): void {
    this.naveService.getNaves().subscribe(
      naves => this.naves = naves,
    );
  }

  public seleccionarNave(nave: Nave) {
    this.naveActual = nave;
  }

  public enviarSeleccionNave() {
    this.tipulanteService.getTripulante(this.idTripulante).subscribe(
      tripulante => {
        this.naveActual.tripulantes = [tripulante];
        this.naveService.ingresarTripulanteANave(this.idTripulante, this.naveActual.id!).subscribe(
          res => {
            this.router.navigate(['/login']).then(() => {
              window.location.reload();
            });
          },
          error => console.log(error)
        );
      }
    );
  }
}
