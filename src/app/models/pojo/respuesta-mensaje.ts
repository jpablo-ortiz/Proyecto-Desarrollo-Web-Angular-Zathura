export class RespuestaMensaje {
  public mensaje?: string;
  public bool?: boolean;

  constructor(mensaje?: string, bool?: boolean) {
    this.mensaje = mensaje;
    this.bool = bool;
  }
}
