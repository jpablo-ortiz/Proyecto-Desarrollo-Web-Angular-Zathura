import { Planeta } from "../planeta/planeta";
import { Producto } from "../producto/producto";

export class PlanetaXProducto {

  public id?: number;
  public precioVenta?: number;
  public precioCompra?: number;
  public factorDemanda?: number;
  public factorOferta?: number;
  public stock?: number;
  public planeta?: Planeta;
  public producto?: Producto;

  constructor(id?: number, precioVenta?: number, precioCompra?: number, factorDemanda?: number, factorOferta?: number, stock?: number, planeta?: Planeta, producto?: Producto) {
    this.id = id;
    this.precioVenta = precioVenta;
    this.precioCompra = precioCompra;
    this.factorDemanda = factorDemanda;
    this.factorOferta = factorOferta;
    this.stock = stock;
    this.planeta = planeta;
    this.producto = producto;
  }
}
