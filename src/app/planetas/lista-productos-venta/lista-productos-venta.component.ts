import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
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
  public productos: Producto[] = [];

  public productosMap: Map<Producto, boolean> = new Map<Producto, boolean> ();

  constructor(
    private planetaService: PlanetaService,
    private tripulanteService: TripulanteService,
    private naveService: NaveService
  ) { }

  ngOnInit(): void {
    this.getPlanetasXProducto(this.planetaId)
  }

  public getPlanetasXProducto(planetaId: number) {
    var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();

    this.tripulanteService.getNaveActualTripulante(idTripulanteActual).subscribe(
      (naveActual) => {

        this.planetaService.getProductosXPlaneta(planetaId).subscribe(
          produc => {
            this.productos = produc;
            this.productos.forEach(producto => { this.productosMap.set(producto, false) });

            for (let i = 0; i < produc.length; i++) {
              var producto = produc[i];


              this.naveService.getNaveXProducto(naveActual.id!, producto.id!).subscribe(
                (naveProducto) => {
                  if (naveProducto != null) {
                    this.productosMap.set(producto, true);
                  }

                }
              );

            }

          }
        );

      }
    );
  }
}
