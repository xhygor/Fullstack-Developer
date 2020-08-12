export class Cliente {
  public idCliente?: string;
  public nome?: string;
  public codigo?: string;

  static fromJson(json: any): Cliente {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Cliente(), json);
  }
}
