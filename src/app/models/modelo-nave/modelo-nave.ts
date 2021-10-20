import { Nave } from "../nave/nave";

export class ModeloNave {
  public id?: number;
  public nombreModelo?: string;
  public cargaMax?: number;
  public velocidadMax?: number;
  public naves?: Nave[];

  constructor(id?: number, nombreModelo?: string, cargaMax?: number, velocidadMax?: number, naves?: Nave[]) {
    this.id = id;
    this.nombreModelo = nombreModelo;
    this.cargaMax = cargaMax;
    this.velocidadMax = velocidadMax;
    this.naves = naves;
  }

}
