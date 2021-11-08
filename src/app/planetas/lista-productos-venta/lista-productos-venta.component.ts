import { Component, Input, OnInit } from '@angular/core';
import { PlanetaXProducto } from 'src/app/models/planeta-x-producto/planeta-xproducto';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { PlanetaService } from 'src/app/shared/services/planeta/planeta.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-lista-productos-venta',
  templateUrl: './lista-productos-venta.component.html',
  styleUrls: ['./lista-productos-venta.component.css']
})
export class ListaProductosVentaComponent implements OnInit {

  @Input() public planetaId: number = 0;
  public productosNoPermitidos: PlanetaXProducto[] = [];
  public productosPermitidos: PlanetaXProducto[] = [];

  constructor(
    private planetaService: PlanetaService,
    private tripulanteService: TripulanteService,
    private naveService: NaveService
  ) { }

  ngOnInit(): void {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.getProductosVender(idTripulanteActual, this.planetaId);
  }

  public getProductosVender(tripulanteId:number ,planetaId: number) {
    this.tripulanteService.getProductosVenta(tripulanteId,planetaId).subscribe(
      productosVenta => {
        console.log(productosVenta);
        this.productosPermitidos = productosVenta.productos_permitidos;
        this.productosNoPermitidos = productosVenta.productos_no_permitidos;
      }
    );
  }

}
