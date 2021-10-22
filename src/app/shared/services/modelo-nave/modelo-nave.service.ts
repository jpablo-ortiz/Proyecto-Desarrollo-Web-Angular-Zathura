import { Injectable } from '@angular/core';
import { ModeloNave } from 'src/app/models/modelo-nave/modelo-nave';
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
    const url = 'modelo-nave';
    return this.restService.post(url, modeloNave);
  }

  // ------------------------------------------------------------
  // -------------------------- READ ----------------------------
  // ------------------------------------------------------------

  public getModeloNave(id: number) {
    const url = 'modelo-nave/' + id;
    return this.restService.get(url);
  }

  public getModeloNaves() {
    const url = 'modelo-nave';
    return this.restService.get(url);
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateModeloNave(modeloNave: ModeloNave) {
    const url = 'modelo-nave';
    return this.restService.post(url, modeloNave);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteModeloNave(id: number) {
    const url = 'modelo-nave/' + id;
    return this.restService.delete(url);
  }
}
