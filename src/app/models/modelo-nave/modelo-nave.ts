import { Nave } from "../nave/nave";

export class ModeloNave {
  public id?: number;
  public nombreModelo?: string;
  public cargaMax?: number;
  public velocidadMax?: number;
  public tiempoLimite?: number;
  public naves?: Nave[];

  constructor(id?: number, nombreModelo?: string, cargaMax?: number, velocidadMax?: number, tiempoLimite?: number, naves?: Nave[]) {
    this.id = id;
    this.nombreModelo = nombreModelo;
    this.cargaMax = cargaMax;
    this.velocidadMax = velocidadMax;
    this.tiempoLimite = tiempoLimite;
    this.naves = naves;
  }

}
