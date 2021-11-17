import { Component, Input, OnInit } from '@angular/core';
import { PlanetaXProducto } from 'src/app/models/planeta-x-producto/planeta-xproducto';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-lista-productos-venta',
  templateUrl: './lista-productos-venta.component.html',
  styleUrls: ['./lista-productos-venta.component.css']
})
export class ListaProductosVentaComponent implements OnInit {

  public rol: string = "";
  public rolComerciante: boolean = false
  public rolNavegante: boolean = false

  @Input() public planetaId: number = 0;
  public productosNoPermitidos: PlanetaXProducto[] = [];
  public productosPermitidos: PlanetaXProducto[] = [];

  constructor(
    private tripulanteService: TripulanteService
  ) { }

  ngOnInit(): void {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.getProductosVender(idTripulanteActual, this.planetaId);
    this.rol = this.tripulanteService.getRolTripulanteLogeado();
    if (this.rol == "Comerciante") {
      this.rolComerciante = true;
    } else if (this.rol == "Navegante") {
      this.rolNavegante = true;
    } else if (this.rol == "Capitan") {
      this.rolNavegante = true;
      this.rolComerciante = true;
    }
  }

  public getProductosVender(tripulanteId: number, planetaId: number) {
    this.tripulanteService.getProductosVenta(tripulanteId, planetaId).subscribe(
      productosVenta => {
        console.log(productosVenta);
        this.productosPermitidos = productosVenta.productos_permitidos;
        this.productosNoPermitidos = productosVenta.productos_no_permitidos;
      }
    );
  }

}
