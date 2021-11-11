import { Injectable } from '@angular/core';
import { Nave } from 'src/app/models/nave/nave';
import { RespuestaMensaje } from 'src/app/models/pojo/respuesta-mensaje';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';
import { NaveXProducto } from './../../../models/nave-x-producto/nave-xproducto';

@Injectable({
  providedIn: 'root'
})
export class NaveService {




  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

  // ------------------------------------------------------------
  // -------------------------- CREATE --------------------------
  // ------------------------------------------------------------

  public createNave(nave: Nave) {
    const url = environment.baseURL + '/nave';
    return this.restService.post(url, nave);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getNave(id: number) {
    const url = environment.baseURL + '/nave/' + id;
    return this.restService.get(url, { withCredentials: true });
  }

  public getNaves() {
    const url = environment.baseURL + '/nave';
    return this.restService.get<Nave[]>(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateNave(nave: Nave) {
    const url = environment.baseURL + '/nave/' + nave.id;
    return this.restService.post<Nave>(url, nave);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteNave(id: number) {
    const url = environment.baseURL + '/nave/' + id;
    return this.restService.delete(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- OTHER ---------------------------
  // ------------------------------------------------------------

  public updatePlanetaDeLaNave(idNave: number, idPlaneta: number) {
    const url = environment.baseURL + '/nave/' + idNave + '/planeta/' + idPlaneta;
    return this.restService.get<Nave>(url, { withCredentials: true });
  }


  public getNaveXProducto(naveId: number, productoId: number) {
    const url = environment.baseURL + '/nave/' + naveId + '/producto/' + productoId;
    return this.restService.get<NaveXProducto>(url, { withCredentials: true });
  }

  public realizarCompra(idPlaneta: number, idProducto: number, idNave: number, cantidad: number) {
    const url = environment.baseURL + '/nave/comprar';
    return this.restService.post<RespuestaMensaje>(url, {
      idPlaneta: idPlaneta,
      idProducto: idProducto,
      idNave: idNave,
      cantidad: cantidad
    });
  }

  public realizarVenta(idPlaneta: number, idProducto: number, idNave: number, cantidad: number) {
    const url = environment.baseURL + '/nave/vender';
    return this.restService.post<RespuestaMensaje>(url, {
      idPlaneta: idPlaneta,
      idProducto: idProducto,
      idNave: idNave,
      cantidad: cantidad
    });
  }

  public ingresarTripulanteANave(idTripulante: number, idNave: number) {
    const url = environment.baseURL + '/nave/tripulante/' + idTripulante + '/nave/' + idNave;
    return this.restService.get(url, { withCredentials: true });
  }






}
