import { Injectable } from '@angular/core';
import { ModeloNave } from 'src/app/models/modelo-nave/modelo-nave';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

@Injectable({
  providedIn: 'root'
})
export class ModeloNaveService {

  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

	// ------------------------------------------------------------
	// -------------------------- CREATE --------------------------
	// ------------------------------------------------------------

  public createModeloNave(modeloNave: ModeloNave) {
    const url = environment.baseURL + '/modelo-nave';
    return this.restService.post(url, modeloNave);
  }

  // ------------------------------------------------------------
  // -------------------------- READ ----------------------------
  // ------------------------------------------------------------

  public getModeloNave(id: number) {
    const url = environment.baseURL + '/modelo-nave/' + id;
    return this.restService.get(url, { withCredentials: true });
  }

  public getModeloNaves() {
    const url = environment.baseURL + '/modelo-nave';
    return this.restService.get<ModeloNave[]>(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateModeloNave(modeloNave: ModeloNave) {
    const url = environment.baseURL + '/modelo-nave';
    return this.restService.post(url, modeloNave);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteModeloNave(id: number) {
    const url = environment.baseURL + '/modelo-nave/' + id;
    return this.restService.delete(url, { withCredentials: true });
  }
}
