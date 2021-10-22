export class RespuestaMensaje {
  public mensaje?: string;
  public error?: boolean;

  constructor(mensaje?: string, error?: boolean) {
    this.mensaje = mensaje;
    this.error = error;
  }
}
