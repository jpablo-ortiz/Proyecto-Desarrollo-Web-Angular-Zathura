import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NaveXProducto } from 'src/app/models/nave-x-producto/nave-xproducto';
import { Nave } from 'src/app/models/nave/nave';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
import { PlanetaXProducto } from './../../models/planeta-x-producto/planeta-xproducto';
import { PlanetaService } from './../../shared/services/planeta/planeta.service';

@Component({
  selector: 'app-transaccion-compra',
  templateUrl: './transaccion-compra.component.html',
  styleUrls: ['./transaccion-compra.component.css']
})
export class TransaccionCompraComponent implements OnInit {

  public planetaId: number;
  public productoId: number;
  public cantidad: number = 1;
  public totalCompra: number = 0;

  public naveActual: Nave;
  public naveXProducto: NaveXProducto;
  public planetaXProducto: PlanetaXProducto;

  public mensaje: string = "";
  public respuesta: number = 0;

  constructor(
    private tripulanteService: TripulanteService,
    private naveService: NaveService,
    private route: ActivatedRoute,
    private planetaService: PlanetaService
  ) {
    this.naveActual = new Nave();
    this.planetaXProducto = new PlanetaXProducto();
    this.naveXProducto = new NaveXProducto();

    this.planetaId = Number(this.route.snapshot.paramMap.get('idPlaneta'));
    this.productoId = Number(this.route.snapshot.paramMap.get('idProducto'));
  }

  ngOnInit(): void {
    this.getPlanetaXProducto(this.planetaId, this.productoId)
    this.getNave();
  }

  public getPlanetaXProducto(planetaId: number, productoId: number) {
    this.planetaService.getPlanetaXProducto(planetaId, productoId).subscribe(
      pxp => this.planetaXProducto = pxp,
    );
  }

  public getNave() {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getNaveActualTripulante(idTripulanteActual).subscribe(
      nav => {
        this.naveActual = nav;
        this.getNaveXProducto(nav.id!, this.productoId);
      }
    );
  }

  public getNaveXProducto(naveId: number, productoId: number) {
    this.naveService.getNaveXProducto(naveId, productoId).subscribe(
      nxp => this.naveXProducto = nxp,
    );
  }

  public realizarCompra(idPlaneta: number, idProducto: number, idNave: number, cantidad: number) {
    this.naveService.realizarCompra(idPlaneta, idProducto, idNave, cantidad).subscribe(
      res => {
        this.mensaje = res.mensaje!;
        if (res.error) {
          this.respuesta = 1;
        }
        else {
          this.respuesta = 2;
        }
      }
    );
  }

  public botonRealizarCompra() {
    this.realizarCompra(this.planetaId, this.productoId, this.naveActual.id!, this.cantidad);
  }

}
