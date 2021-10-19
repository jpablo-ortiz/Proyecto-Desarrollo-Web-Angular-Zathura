import { Nave } from "../nave/nave";

export class Tripulante {

  public id?: number;
  public username?: string;
  public password?: string;
  public capitan?: boolean;
  public navegante?: boolean;
  public comerciante?: boolean;
  public nave?: Nave;

  constructor(id?: number, username?: string, password?: string, capitan?: boolean, navegante?: boolean, comerciante?: boolean, nave?: Nave) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.capitan = capitan;
    this.navegante = navegante;
    this.comerciante = comerciante;
    this.nave = nave;
  }
}

