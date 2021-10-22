import { Injectable } from '@angular/core';
import { Estrella } from 'src/app/models/estrella/estrella';
import { Nave } from 'src/app/models/nave/nave';
import { Planeta } from 'src/app/models/planeta/planeta';
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
    return this.restService.post<Tripulante>(url, tripulante);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getTripulante(id: number) {
    const url = environment.baseURL + '/tripulante/' + id;
    return this.restService.get<Tripulante>(url);
  }

  public getTripulantes() {
    const url = environment.baseURL + '/tripulante';
    return this.restService.get<Tripulante[]>(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateTripulante(tripulante: Tripulante) {
    const url = environment.baseURL + '/tripulante/' + tripulante.id;
    return this.restService.post<Tripulante>(url, tripulante);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteTripulante(id: number) {
    const url = environment.baseURL + '/tripulante/' + id;
    return this.restService.delete(url);
  }

  // ------------------------------------------------------------
  // --------------------------- OTROS --------------------------
  // ------------------------------------------------------------

  public getTripulantesByNaveId(idNave: number) {
    const url = environment.baseURL + '/tripulante/nave/' + idNave;
    return this.restService.get<Tripulante[]>(url);
  }

  public getEstrellaActualTripulante(idTripulanteActual: number) {
    const url = environment.baseURL + '/tripulante/' + idTripulanteActual + '/estrella';
    return this.restService.get<Estrella>(url);
  }

  public getPlanetaActualTripulante(idTripulanteActual: number) {
    const url = environment.baseURL + '/tripulante/' + idTripulanteActual + '/planeta';
    return this.restService.get<Planeta>(url);
  }

  public getNaveActualTripulante(idTripulante: number) {
    const url = environment.baseURL + '/tripulante/' + idTripulante + '/nave';
    return this.restService.get<Nave>(url);
  }

  // ------------------------------------------------------------
  // ------------------------- OTROS ---------------------------
  // ------------------------------------------------------------

  public setIdTripulanteLogeado(id: number) {
    sessionStorage.setItem('idTripulanteActual',  String(id));
  }

  public getIdTripulanteLogeado(): number {
    return Number(sessionStorage.getItem('idTripulanteActual'));
  }

}
