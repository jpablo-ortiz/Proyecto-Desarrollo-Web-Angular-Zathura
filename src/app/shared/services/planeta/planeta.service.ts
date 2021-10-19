import { Injectable } from '@angular/core';
import { Planeta } from 'src/app/models/planeta/planeta';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

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
    return this.restService.post(url, planeta);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getPlaneta(id: number) {
    const url = environment.baseURL + '/planeta/' + id;
    return this.restService.get(url);
  }

  public getPlanetas() {
    const url = environment.baseURL + '/planeta';
    return this.restService.get<Planeta>(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updatePlaneta(planeta: Planeta) {
    const url = environment.baseURL + '/planeta/' + planeta.id;
    return this.restService.put(url, planeta);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deletePlaneta(id: number) {
    const url = environment.baseURL + '/planeta/' + id;
    return this.restService.delete(url);
  }

}
