import { NaveXProducto } from "../nave-x-producto/nave-xproducto";
import { PlanetaXProducto } from "../planeta-x-producto/planeta-xproducto";

export class Producto {

  public id?: number;
  public nombre?: string;
  public costoCredito?: number;
  public volumen?: number;
  public peso?: number;
  public planetas?: PlanetaXProducto[];
  public naves?: NaveXProducto[];

  constructor(id?: number, nombre?: string, costoCredito?: number, volumen?: number, peso?: number, planetas?: PlanetaXProducto[], naves?: NaveXProducto[]) {
    this.id = id;
    this.nombre = nombre;
    this.costoCredito = costoCredito;
    this.volumen = volumen;
    this.peso = peso;
    this.planetas = planetas;
    this.naves = naves;
  }
}
