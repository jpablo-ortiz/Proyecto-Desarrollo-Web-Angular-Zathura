import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto/producto';
import { environment } from 'src/environments/environment';
import { RestService } from '../../rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private restService: RestService) { }

  // CRUD - CREATE - READ - UPDATE - DELETE

	// ------------------------------------------------------------
	// -------------------------- CREATE --------------------------
	// ------------------------------------------------------------

  public createProducto(producto: Producto) {
    const url = environment.baseURL + '/producto';
    return this.restService.post(url, producto);
  }

  // ------------------------------------------------------------
  // --------------------------- READ ---------------------------
  // ------------------------------------------------------------

  public getProducto(id: number) {
    const url = environment.baseURL + '/producto/' + id;
    return this.restService.get(url, { withCredentials: true });
  }

  public getProductos() {
    const url = environment.baseURL + '/producto';
    return this.restService.get<Producto>(url, { withCredentials: true });
  }

  // ------------------------------------------------------------
  // -------------------------- UPDATE --------------------------
  // ------------------------------------------------------------

  public updateProducto(producto: Producto) {
    const url = environment.baseURL + '/producto/' + producto.id;
    return this.restService.post(url, producto);
  }

  // ------------------------------------------------------------
  // -------------------------- DELETE --------------------------
  // ------------------------------------------------------------

  public deleteProducto(id: number) {
    const url = environment.baseURL + '/producto/' + id;
    return this.restService.delete(url, { withCredentials: true });
  }


}
