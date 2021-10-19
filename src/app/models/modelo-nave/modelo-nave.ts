import { Nave } from "../nave/nave";

export class ModeloNave {
  public id?: number;
  public nombreModelo?: string;
  public cargaMax?: string;
  public velocidadMax?: string;
  public naves?: Nave[];

  constructor(id?: number, nombreModelo?: string, cargaMax?: string, velocidadMax?: string, naves?: Nave[]) {
    this.id = id;
    this.nombreModelo = nombreModelo;
    this.cargaMax = cargaMax;
    this.velocidadMax = velocidadMax;
    this.naves = naves;
  }

}
