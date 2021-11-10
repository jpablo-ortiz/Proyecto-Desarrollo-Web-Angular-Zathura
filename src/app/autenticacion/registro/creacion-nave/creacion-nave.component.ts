import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloNave } from 'src/app/models/modelo-nave/modelo-nave';
import { Nave } from 'src/app/models/nave/nave';
import { ModeloNaveService } from 'src/app/shared/services/modelo-nave/modelo-nave.service';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-creacion-nave',
  templateUrl: './creacion-nave.component.html',
  styleUrls: ['./creacion-nave.component.css']
})
export class CreacionNaveComponent implements OnInit {

  //DATOS
  public nombre: string = "";
  public idTripulante: number;

  public modelosNaves: ModeloNave[] = [];

  public modeloNaveActual = new ModeloNave(undefined, "Seleccione el modelo Nave");

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private naveService: NaveService,
    private modeloNaveService: ModeloNaveService,
    private tipulanteService: TripulanteService,
  ) {
    this.idTripulante = Number(this.route.snapshot.paramMap.get('idTripulante'));
  }

  ngOnInit(): void {
    this.modeloNaveService.getModeloNaves().subscribe(
      modelosNaves => this.modelosNaves = modelosNaves,
    );
  }

  public seleccionarModeloNave(modeloNave: ModeloNave) {
    this.modeloNaveActual = modeloNave;
  }

  public crearNave() {
    var id = this.idTripulante;
    this.tipulanteService.getTripulante(id).subscribe(
      tripulante => {
        var nave = new Nave();
        nave.modeloNave = this.modeloNaveActual;
        nave.tripulantes = [tripulante];
        this.naveService.createNave(nave).subscribe(
          nave => {
            this.router.navigate(['/login']).then(() => {
              window.location.reload();
            });
          }
        );
      }
    );
  }

}
