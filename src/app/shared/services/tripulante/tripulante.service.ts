import { HttpHeaders, HttpParams } from '@angular/common/http';
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

  constructor(
    private restService: RestService
  ) { }

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
    return this.restService.get<Tripulante>(url, { withCredentials: true });
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
    sessionStorage.setItem('idTripulanteActual', String(id));
  }

  public getIdTripulanteLogeado(): number {
    return Number(sessionStorage.getItem('idTripulanteActual'));
  }

  public cerrarSesion(): void {
    var sesionIniciada = this.isAuth();
    var mensaje = '';

    console.log(sesionIniciada);

    if (sesionIniciada) {
      this.logout().subscribe(
        () => {
          sessionStorage.clear;
          sessionStorage.setItem('Auth', 'false');
          mensaje = 'Sesion cerrada correctamente';
        },
        error => mensaje = 'Error'
      );
    }
    else {
      mensaje = 'Error: No hay una sesion abierta';
    }
  }

  public isAuth(): boolean {
    if (sessionStorage.getItem('Auth') != null && sessionStorage.getItem('Auth') === 'true') {
      return true;
    }
    else {
      return false;
    }
  }










  public getProductosVenta(tripulanteId: number, planetaId: number) {
    const url = environment.baseURL + '/tripulante/' + tripulanteId + '/' + planetaId + '/productos';
    return this.restService.get<any>(url);

  }

  ///////////////////////////////////////
  /////    Autenticación
  ///////////////////////////////////////


  public login(usuario: string, password: string) {
    const formHeaders = new HttpHeaders();
    formHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const formParams = new HttpParams()
      .set('username', usuario)
      .set('password', password);

    return this.restService.post<any>('http://localhost:8080/login', null, {
      headers: formHeaders,
      params: formParams,
      withCredentials: true
    });
  }

  public getTripulantePorLogin(usuario: string, password: string) {
    const url = environment.baseURL + '/tripulante/' + usuario + '/login/' + password;
    return this.restService.get<Tripulante>(url, { withCredentials: true });
  }

  public logout() {
    return this.restService.post('http://localhost:8080/logout', '',
      { withCredentials: true });
  }


}
