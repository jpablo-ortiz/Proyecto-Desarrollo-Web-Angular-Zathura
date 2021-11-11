import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
import { PlanetaService } from 'src/app/shared/services/planeta/planeta.service';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';

@Component({
  selector: 'app-lista-productos-compra',
  templateUrl: './lista-productos-compra.component.html',
  styleUrls: ['./lista-productos-compra.component.css']
})
export class ListaProductosCompraComponent implements OnInit {

  public rol : string ="";
  public rolComerciante : boolean = false
  public rolNavegante: boolean = false

  @Input() public planetaIdActual: number = 0;

  public productos: Producto[] = [];

  constructor(
    private planetaService: PlanetaService,
    private tripulanteService: TripulanteService
  ) { }

  ngOnInit(): void {
    this.getPlanetasXProducto(this.planetaIdActual)
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

  public getPlanetasXProducto(planetaIdActual: number) {
    this.planetaService.getProductosXPlaneta(planetaIdActual).subscribe(
      async produc => {
        for (let i = 0; i < produc.length; i++) {
          var producto = produc[i];
          this.planetaService.getPlanetaXProducto(planetaIdActual, producto.id!).subscribe(
            planetaXProducto => {
              if(planetaXProducto.stock! > 0){
                this.productos.push(planetaXProducto.producto!);
              }
            }
          );
        }
      }
    );
  }

}
