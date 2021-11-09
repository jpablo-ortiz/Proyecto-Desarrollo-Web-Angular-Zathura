import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeloNave } from 'src/app/models/modelo-nave/modelo-nave';
import { Nave } from 'src/app/models/nave/nave';
import { ModeloNaveService } from 'src/app/shared/services/modelo-nave/modelo-nave.service';
import { NaveService } from 'src/app/shared/services/nave/nave.service';

@Component({
  selector: 'app-creacion-nave',
  templateUrl: './creacion-nave.component.html',
  styleUrls: ['./creacion-nave.component.css']
})
export class CreacionNaveComponent implements OnInit {

  //DATOS
  public nombre: string = "";
  public cargaActual: number = 0;
  public cantidadCredito: number = 0;
  public totalTiempoViaje: number = 0;
  public idPlaneta: number;

  public naves: Nave[] = [];
  public modelosNaves: ModeloNave[] = [];

  constructor(
    private route: ActivatedRoute,
    private naveService: NaveService,
    private modeloNaveService: ModeloNaveService
  ) {
    this.idPlaneta = Number(this.route.snapshot.paramMap.get('idTripulante'));
  }

  ngOnInit(): void {
    this.naveService.getNaves().subscribe(
      naves => this.naves = naves,
    );
    this.modeloNaveService.getModeloNaves().subscribe(
      modelosNaves => this.modelosNaves = modelosNaves,
    );
  }

  public crearNave(/*modeloNave: ModeloNave*/) {
    var nave = new Nave();
    //nave.modeloNave = modeloNave;
    //nave.cargaActual = this.cargaActual;
    //nave.cantidadCredito = this.cantidadCredito;
  }

  public seleccionarNave(nave:Nave) {

  }

}
