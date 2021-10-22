import { Estrella } from "../estrella/estrella";
import { Nave } from "../nave/nave";
import { PlanetaXProducto } from "../planeta-x-producto/planeta-xproducto";

export class Planeta {

  public id?: number;
  public nombre?: string;
  public habitado?: boolean;
  public estrella?: Estrella;
  public planetaXProductos?: PlanetaXProducto[];
  public naves?: Nave[];

  constructor(id?: number, nombre?: string, habitado?: boolean, estrella?: Estrella, planetaXProductos?: PlanetaXProducto[], naves?: Nave[]) {
    this.id = id;
    this.nombre = nombre;
    this.habitado = habitado;
    this.estrella = estrella;
    this.planetaXProductos = planetaXProductos;
    this.naves = naves;
  }

}
