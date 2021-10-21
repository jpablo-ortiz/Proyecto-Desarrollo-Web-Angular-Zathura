import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
import { PlanetaService } from 'src/app/shared/services/planeta/planeta.service';

@Component({
  selector: 'app-lista-productos-compra',
  templateUrl: './lista-productos-compra.component.html',
  styleUrls: ['./lista-productos-compra.component.css']
})
export class ListaProductosCompraComponent implements OnInit {

  @Input() public planetaIdActual: number = 0;
  public productos : Producto[] =  []; 

constructor(private planetaService: PlanetaService) { }


ngOnInit(): void {
  this.getPlanetasXProducto(this.planetaIdActual)
}

public getPlanetasXProducto(planetaIdActual: number) {
 this.planetaService.getProductosXPlaneta(planetaIdActual).subscribe( produc => {

  this.productos = produc;
 }


 );

}

}
