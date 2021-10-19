import { Planeta } from "../planeta/planeta";
import { Ruta } from "../ruta/ruta";

export class Estrella {

  public id?: number;
  public nombre?: string;
  public recurso?: number;
  public x?: number;
  public y?: number;
  public z?: number;
  public habitado?: boolean;
  public planetas?: Planeta[];
  public rutasA?: Ruta[];
  public rutasB?: Ruta[];

  constructor(id?: number, nombre?: string, recurso?: number, x?: number, y?: number, z?: number, habitado?: boolean, planetas?: Planeta[], rutasA?: Ruta[], rutasB?: Ruta[]) {
    this.id = id;
    this.nombre = nombre;
    this.recurso = recurso;
    this.x = x;
    this.y = y;
    this.z = z;
    this.habitado = habitado;
    this.planetas = planetas;
    this.rutasA = rutasA;
    this.rutasB = rutasB;
  }

}
