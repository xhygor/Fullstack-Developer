export class Produto {
  public idProduto?: string;
  public nome?: string;
  public codigo?: string;
  public precoUnitario?: number;
  public imagem?: string;

  static fromJson(json: any): Produto {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Produto(), json);
  }
}
