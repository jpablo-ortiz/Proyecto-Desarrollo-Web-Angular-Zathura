import { Nave } from "../nave/nave";

export class Tripulante {

  public id?: number | null = null;
  public username?: string | null = null
  public password?: string | null = null
  public capitan?: boolean | null = null
  public navegante?: boolean | null = null
  public comerciante?: boolean | null = null
  public nave?: Nave | null = null

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

