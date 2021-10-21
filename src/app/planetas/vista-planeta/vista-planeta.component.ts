import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from 'src/app/models/nave/nave';
import { Planeta } from 'src/app/models/planeta/planeta';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { PlanetaService } from 'src/app/shared/services/planeta/planeta.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-vista-planeta',
  templateUrl: './vista-planeta.component.html',
  styleUrls: ['./vista-planeta.component.css']
})
export class VistaPlanetaComponent implements OnInit {

  public idPlaneta: number;
  public naveActual: Nave;
  public planetaActual: Planeta;

  constructor(
    private tripulanteService: TripulanteService,
    private planetaService: PlanetaService,
    private naveService: NaveService,
    private route: ActivatedRoute
  ) {
    this.idPlaneta = Number(this.route.snapshot.paramMap.get('id'))
    this.naveActual = new Nave();
    this.planetaActual = new Planeta();
  }

  ngOnInit(): void {
    this.actualizarPlaneta(this.idPlaneta);
    this.getPlaneta(this.idPlaneta);
  }

  public actualizarPlaneta(idPlaneta: number) {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getNaveActualTripulante(idTripulanteActual).subscribe(
      naveActual => {
        this.naveService.updatePlanetaDeLaNave(naveActual.id!, idPlaneta).subscribe(
          naveActualizada => this.naveActual = naveActualizada,
        );
      }
    );
  }

  public getPlaneta(idPlaneta: number) {
    this.planetaService.getPlaneta(idPlaneta).subscribe(
      planeta => this.planetaActual = planeta
    );
  }

}
