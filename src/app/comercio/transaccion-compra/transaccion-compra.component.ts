import { PlanetaXProducto } from './../../models/planeta-x-producto/planeta-xproducto';
import { PlanetaService } from './../../shared/services/planeta/planeta.service';
import { Component, OnInit,Input } from '@angular/core';
import { Nave } from 'src/app/models/nave/nave';
import { TripulanteService } from 'src/app/shared/services/tripulante/tripulante.service';
import { ActivatedRoute } from '@angular/router';
import { NaveService } from 'src/app/shared/services/nave/nave.service';
import { NaveXProducto } from 'src/app/models/nave-x-producto/nave-xproducto';

@Component({
  selector: 'app-transaccion-compra',
  templateUrl: './transaccion-compra.component.html',
  styleUrls: ['./transaccion-compra.component.css']
})
export class TransaccionCompraComponent implements OnInit {

   public planetaId: number ;
   public naveId?: number = 0;
   public productoId: number ;
   public naveActual: Nave;  
   public naveXProducto:  NaveXProducto = new NaveXProducto();
   public planetaXProducto:  PlanetaXProducto = new PlanetaXProducto();
  constructor(
    private tripulanteService: TripulanteService,
    private naveService: NaveService,
    private route: ActivatedRoute,
    private planetaService :PlanetaService
    ) {
      this.naveActual = new Nave();
      this.planetaId = Number(this.route.snapshot.paramMap.get('idp'));
      this.productoId = Number(this.route.snapshot.paramMap.get('idpr'));
     }

  ngOnInit(): void {
    this.getProductoXPlameta(this.planetaId,this.productoId)
    this.getNave();
    this.getNaveXProducto(this.productoId, this.naveId!);

  }
  
 public getProductoXPlameta(planetaId: number, productoId: number) {
    this.planetaService.getPlanetaXProducto(planetaId,productoId).subscribe(
      pxp =>
      {
        this.planetaXProducto = pxp;
      });
  }
public getNave(){
  var idTripulanteActual = this.tripulanteService.getIdTripulanteLogeado();
    this.tripulanteService.getNaveActualTripulante(idTripulanteActual).subscribe(
      nav=> {
        this.naveActual = nav;
        this.naveId = nav.id;
      });
  }
public getNaveXProducto(productoId:number, naveId: number) {
  this.naveService.getNaveXProducto(productoId,naveId).subscribe(
    nxp =>
    {
      this.naveXProducto = nxp;
    });
  
}


}
