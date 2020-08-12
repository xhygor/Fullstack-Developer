import {Cliente} from '../../cliente/shared/cliente.model';
import {ItemPedido} from './itemPedido.model';

export class Pedido {
  public id?: number;
  public codigoPedido?: string;
  public cliente?: Cliente;
  public valorTotal?: number;
  public valorFrete: number = 0;
  public itensPedido?: ItemPedido[];

  static fromJson(json: any): Pedido {
    if (json === undefined || json === null) {
      return null;
    }
    return Object.assign(new Pedido(), json);
  }

  adicionarItemPedido(itemPedido: ItemPedido): void {
    if (this.itensPedido === undefined || this.itensPedido === null) {
      this.itensPedido = [];
    }
    if (this.itensPedido.length > 0 && this.itensPedido.some(item => item.produto.codigo === itemPedido.produto.codigo)) {
      this.itensPedido.forEach(i => {
        if (i.produto.codigo === itemPedido.produto.codigo) {
          i.atribuirItem(itemPedido.produto);
          return;
        }
      });
    } else {
      this.itensPedido.push(itemPedido);
    }
  }

  removerItemPedido(itemPedido: ItemPedido): void {
    this.itensPedido.splice(this.itensPedido.indexOf(itemPedido), 1);
  }

  total(): number {
    this.valorTotal = 0;
    if (this.itensPedido) {
      this.itensPedido.forEach(item => this.valorTotal = this.valorTotal + item.subTotal);
    }
    return this.valorTotal;
  }

}
