import { Component, Input, OnInit } from '@angular/core';
import { PlanetaXProductoService } from 'src/app/shared/services/planeta-x-producto/planeta-x-producto.service';
import { PlanetaService } from 'src/app/shared/services/planeta/planeta.service';
import { ProductoService } from 'src/app/shared/services/producto/producto.service';

@Component({
  selector: 'app-lista-productos-venta',
  templateUrl: './lista-productos-venta.component.html',
  styleUrls: ['./lista-productos-venta.component.css']
})
export class ListaProductosVentaComponent implements OnInit {

  @Input() public planetaId: number = 0;

  constructor(private planetXProductoService: PlanetaXProductoService, private planetaService: PlanetaService, private productoService: ProductoService) { }


  ngOnInit(): void {
    this.getPlanetasXProducto(this.planetaId)
  }

 public getPlanetasXProducto(planetaId: number) {
   this.planetaService.getProductosXPlaneta(planetaId)

  }

}
