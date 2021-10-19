import { Injectable } from '@angular/core';
import { Tripulante } from 'src/app/models/tripulante/tripulante';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

@Injectable({
  providedIn: 'root'
})
export class TripulanteService {

  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

	// ------------------------------------------------------------
	// -------------------------- CREATE --------------------------
	// ------------------------------------------------------------

  public createTripulante(tripulante: Tripulante) {
    const url = environment.baseURL + '/tripulante';
    return this.restService.post(url, tripulante);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getTripulante(id: number) {
    const url = environment.baseURL + '/tripulante/' + id;
    return this.restService.get(url);
  }

  public getTripulantes() {
    const url = environment.baseURL + '/tripulante';
    return this.restService.get<Tripulante>(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateTripulante(tripulante: Tripulante) {
    const url = environment.baseURL + '/tripulante/' + tripulante.id;
    return this.restService.put(url, tripulante);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteTripulante(id: number) {
    const url = environment.baseURL + '/tripulante/' + id;
    return this.restService.delete(url);
  }

}
