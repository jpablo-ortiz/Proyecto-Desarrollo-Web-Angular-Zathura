import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
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
    public productos : Producto[] =  []; 

  constructor( private planetaService: PlanetaService) { }


  ngOnInit(): void {
    this.getPlanetasXProducto(this.planetaId)
  }

  public getPlanetasXProducto(planetaId: number) {
   this.planetaService.getProductosXPlaneta(planetaId).subscribe( produc => {

    this.productos = produc;
   }


   );

  }

}
