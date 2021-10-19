import { Injectable } from '@angular/core';
import { Nave } from 'src/app/models/nave/nave';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

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
    return this.restService.get(url);
  }

  public getNaves() {
    const url = environment.baseURL + '/nave';
    return this.restService.get<Nave>(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateNave(nave: Nave) {
    const url = environment.baseURL + '/nave/' + nave.id;
    return this.restService.put(url, nave);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteNave(id: number) {
    const url = environment.baseURL + '/nave/' + id;
    return this.restService.delete(url);
  }

}
