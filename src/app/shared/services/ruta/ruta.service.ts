import { Injectable } from '@angular/core';
import { Ruta } from 'src/app/models/ruta/ruta';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

	// ------------------------------------------------------------
	// -------------------------- CREATE --------------------------
	// ------------------------------------------------------------

  public createRuta(cliente: Ruta) {
    const url = environment.baseURL + '/ruta';
    return this.restService.post(url, cliente);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getRuta(id: number) {
    const url = environment.baseURL + '/ruta/' + id;
    return this.restService.get(url, { withCredentials: true });
  }

  public getRutas() {
    const url = environment.baseURL + '/ruta';
    return this.restService.get<Ruta>(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateRuta(ruta: Ruta) {
    const url = environment.baseURL + '/ruta/' + ruta.id;
    return this.restService.post(url, ruta);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteRuta(id: number) {
    const url = environment.baseURL + '/ruta/' + id;
    return this.restService.delete(url, { withCredentials: true });
  }


}
