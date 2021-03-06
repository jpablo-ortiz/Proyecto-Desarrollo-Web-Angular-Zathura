import { Injectable } from '@angular/core';
import { Planeta } from 'src/app/models/planeta/planeta';
import { Producto } from 'src/app/models/producto/producto';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';
import { PlanetaXProducto } from './../../../models/planeta-x-producto/planeta-xproducto';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

  // ------------------------------------------------------------
  // -------------------------- CREATE --------------------------
  // ------------------------------------------------------------

  public createPlaneta(planeta: Planeta) {
    const url = environment.baseURL + '/planeta';
    return this.restService.post(url, planeta, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getPlaneta(id: number) {
    const url = environment.baseURL + '/planeta/' + id;
    return this.restService.get<Planeta>(url, { withCredentials: true });
  }

  public getPlanetas() {
    const url = environment.baseURL + '/planeta';
    return this.restService.get<Planeta>(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updatePlaneta(planeta: Planeta) {
    const url = environment.baseURL + '/planeta/' + planeta.id;
    return this.restService.post(url, planeta, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deletePlaneta(id: number) {
    const url = environment.baseURL + '/planeta/' + id;
    return this.restService.delete(url, { withCredentials: true });
  }
  // ------------------------------------------------------------
  // -------------------------- OTHER ---------------------------
  // ------------------------------------------------------------


  public getPlanetasByEstrella(idEstrella: number) {
    const url = environment.baseURL + '/planeta/estrella/' + idEstrella;
    return this.restService.get<Planeta[]>(url, { withCredentials: true });

  }
  public getProductosXPlaneta(planetaId: number) {
    const url = environment.baseURL + '/planeta/productos/' + planetaId;
    return this.restService.get<Producto[]>(url, { withCredentials: true });
  }

  public getPlanetaXProducto(planetaId: number, productoId: number) {
    const url = environment.baseURL + '/planeta/' + planetaId + '/producto/' + productoId;
    return this.restService.get<PlanetaXProducto>(url, { withCredentials: true });
  }

}
