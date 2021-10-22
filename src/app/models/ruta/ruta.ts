import { Estrella } from "../estrella/estrella";

export class Ruta {

  public id?: number;
  public distancia?: number;
  public estrellaA?: Estrella;
  public estrellaB?: Estrella;

  constructor(id?: number, distancia?: number, estrellaA?: Estrella, estrellaB?: Estrella) {
    this.id = id;
    this.distancia = distancia;
    this.estrellaA = estrellaA;
    this.estrellaB = estrellaB;
  }

}
