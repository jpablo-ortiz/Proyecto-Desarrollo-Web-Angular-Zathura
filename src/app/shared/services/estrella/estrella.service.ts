import { Injectable } from '@angular/core';
import { Estrella } from 'src/app/models/estrella/estrella';
import { RestService } from 'src/app/shared/rest.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstrellaService {

  constructor(private restService: RestService) { }

	// CRUD - CREATE - READ - UPDATE - DELETE

	// ------------------------------------------------------------
	// -------------------------- CREATE --------------------------
	// ------------------------------------------------------------

  public createEstrella(estrella: Estrella) {
    const url = environment.baseURL + '/estrella';
    return this.restService.post(url, estrella);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getEstrella(id: number) {
    const url = environment.baseURL + '/estrella/' + id;
    return this.restService.get(url);
  }

  public getEstrellas() {
    const url = environment.baseURL + '/estrella';
    return this.restService.get<Estrella>(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateEstrella(estrella: Estrella) {
    const url = environment.baseURL + '/estrella/' + estrella.id;
    return this.restService.put(url, estrella);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteEstrella(id: number) {
    const url = environment.baseURL + '/estrella/' + id;
    return this.restService.delete(url);
  }
}
