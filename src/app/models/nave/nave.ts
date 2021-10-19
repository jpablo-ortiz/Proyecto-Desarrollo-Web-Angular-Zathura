import { ModeloNave } from "../modelo-nave/modelo-nave";
import { NaveXProducto } from "../nave-x-producto/nave-xproducto";
import { Planeta } from "../planeta/planeta";
import { Tripulante } from "../tripulante/tripulante";

export class Nave {

  public id?: number;
  public nombre?: string;
  public cargaActual?: number;
  public cantidadCredito?: number;
  public totalTiempoViaje?: number;
  public planetaActual?: Planeta;
  public productos?: NaveXProducto[];
  public tripulantes?: Tripulante[];
  public modeloNave?: ModeloNave;

  constructor(id?: number, nombre?: string, cargaActual?: number, cantidadCredito?: number, totalTiempoViaje?: number, planetaActual?: Planeta, productos?: NaveXProducto[], tripulantes?: Tripulante[], modeloNave?: ModeloNave) {
    this.id = id;
    this.nombre = nombre;
    this.cargaActual = cargaActual;
    this.cantidadCredito = cantidadCredito;
    this.totalTiempoViaje = totalTiempoViaje;
    this.planetaActual = planetaActual;
    this.productos = productos;
    this.tripulantes = tripulantes;
    this.modeloNave = modeloNave;
  }
}
