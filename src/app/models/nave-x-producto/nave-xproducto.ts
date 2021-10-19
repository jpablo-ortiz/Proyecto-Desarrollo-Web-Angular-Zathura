import { Nave } from "../nave/nave";
import { Producto } from "../producto/producto";

export class NaveXProducto {

  public id?: number;
  public stock?: number;
  public totalCredito?: number;
  public totalVolumen?: number;
  public nave?: Nave;
  public producto?: Producto;

  constructor(id?: number, stock?: number, totalCredito?: number, totalVolumen?: number, nave?: Nave, producto?: Producto) {
    this.id = id;
    this.stock = stock;
    this.totalCredito = totalCredito;
    this.totalVolumen = totalVolumen;
    this.nave = nave;
    this.producto = producto;
  }

}
