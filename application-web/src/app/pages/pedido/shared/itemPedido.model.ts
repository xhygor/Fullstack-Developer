import {Produto} from '../../produto/shared/produto.model';

export class ItemPedido {
  public id?: number;
  public produto?: Produto;
  public quantidadeItens?: number;
  public subTotal?: number;

  static fromJson(json: any): ItemPedido {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new ItemPedido(), json);
  }

  public atribuirItem(produtoNovo: Produto): ItemPedido {
    this.produto = produtoNovo;
    this.quantidadeItens += 1;
    this.subTotal += produtoNovo.precoUnitario;

    return this;
  }

  public adicionarItem(produtoNovo: Produto): ItemPedido {
    this.produto = produtoNovo;
    this.quantidadeItens = 1;
    this.subTotal = produtoNovo.precoUnitario;

    return this;
  }
}
