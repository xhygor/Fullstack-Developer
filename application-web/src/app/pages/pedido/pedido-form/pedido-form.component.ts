import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Cliente} from '../../cliente/shared/cliente.model';
import {map, startWith} from 'rxjs/operators';
import {Produto} from '../../produto/shared/produto.model';
import {Pedido} from '../shared/pedido.model';
import {PedidoService} from '../shared/pedido.service';
import {ProdutoService} from '../../produto/shared/produto.service';
import {ClienteService} from '../../cliente/shared/cliente.service';
import {ItemPedido} from '../shared/itemPedido.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  clienteControl = new FormControl();
  clientes: Cliente[];
  clientesFiltrados: Observable<Cliente[]>;
  cliente: Cliente;
  itemPedido: ItemPedido;

  produtoControl = new FormControl();
  produtos: Produto[];
  produtosFiltrados: Observable<Produto[]>;

  pedido: Pedido;
  pedidoFinalizado: boolean;

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private snack: MatSnackBar
  ) {
  }


  ngOnInit(): void {
    this.pedido = new Pedido();
    this.pedidoFinalizado = false;
    this.clientes = ELEMENT_DATA_CLIENTE;
    this.produtos = ELEMENT_DATA_PRODUTO;

    this.clientesFiltrados = this.clienteControl.valueChanges.pipe(startWith(''), map(cliente => cliente ? this._filterCliente(cliente) : this.clientes.slice()));

    this.produtosFiltrados = this.produtoControl.valueChanges.pipe(startWith(''), map(produto => produto ? this._filterProduto(produto) : this.produtos.slice()));
  }

  public adicionarCliente(value: Cliente): void {
    this.pedido.cliente = value;
  }

  public adicionarProduto(value: Produto): void {
    this.itemPedido = new ItemPedido();
    this.itemPedido.adicionarItem(value);

    this.pedido.adicionarItemPedido(this.itemPedido);
    this.produtoControl.reset();
  }

  public removerProduto(value: ItemPedido): void {
    this.pedido.removerItemPedido(value);
  }

  finalizarPedido() {
    if (!this.pedido.itensPedido || this.pedido.itensPedido.length == 0) {
      this.snack.open('Adicione itens ao pedido!');
    } else {
      this.pedidoService.finalizarPedido(this.pedido).subscribe(result => {
        this.pedido = result;
        this.pedidoFinalizado = true;
        this.snack.open('Pedido salvo com sucesso!');
      }, error => this.snack.open(error));
    }
  }

  limparPedido() {
    this.pedido = new Pedido();
    this.pedidoFinalizado = false;
    this.produtoControl.reset();
    this.clienteControl.reset();
  }

  private _filterCliente(value: string): Cliente[] {
    const filterValue = value.toLowerCase();
    return this.clientes.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterProduto(value: string): Produto[] {
    const filterValue = value.toLowerCase();
    return this.produtos.filter(option => option.nome.toLowerCase().indexOf(filterValue) === 0);
  }
}

const ELEMENT_DATA_CLIENTE: Cliente[] = [
  {idCliente: '4f8e6b89-7b3f-450d-9f9d-03dba15d6e3a', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Kegyu Guida'},
  {idCliente: 'd758c9df-af24-4a8a-b9b4-f221e76c45be', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Miohu Daein'},
  {idCliente: '40ba630c-e838-4231-82c5-080215420358', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Kauvi Hifio'},
  {idCliente: 'b219af51-3557-43e3-8233-74ceb7a75cd2', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Befey Saoen'},
  {idCliente: 'fbf874af-da87-4b84-a0c3-f35251d566df', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Lyeko Ceotirun'},
  {idCliente: '69227753-526a-429b-856b-a6533e1bb208', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Mebol Morui'}
];
const ELEMENT_DATA_PRODUTO: Produto[] = [
  {
    idProduto: '176c3694-f403-47d7-848c-7152ba4950d6',
    codigo: '12',
    nome: 'iPhone 11 Apple com 128GB, Tela Retina HD de 6,1”, iOS 13, Dupla Câmera Traseira de 12 MP, Resistente à Água e Bateria de Longa Duração - Branco',
    precoUnitario: 4699,
    imagem: 'https://images-submarino.b2w.io/produtos/01/00/img/1611324/8/1611324805_1SZ.jpg'
  },
  {
    idProduto: '176c3694-f403-47d7-848c-7152ba4950d6',
    codigo: '35',
    nome: 'Monitor Widescreen LCD LED 18.5” AOC HD E970SWNL',
    precoUnitario: 444.9,
    imagem: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=10271559'
  },
  {
    idProduto: '176c3694-f403-47d7-848c-7152ba4950d6',
    codigo: '312800A',
    nome: 'Fogão 3 Bocas 1 Dupla Cristalaço Industrial Baixa Pressão',
    precoUnitario: 718.08,
    imagem: 'https://www.webcontinental.com.br/ccstore/v1/images/?source=/file/v6610096223560789061/products/209247.MKP000496000502-fogao-3-bocas-1-dupla-cristalaco-industrial-baixa-pressao_7600.jpg&height=940&width=940'
  },
  {
    idProduto: '176c3694-f403-47d7-848c-7152ba4950d6',
    codigo: '478ZB',
    nome: 'Fone de Ouvido Apple AirPods 2 com Estojo de Recarga',
    precoUnitario: 1099,
    imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/1260899/1/1260899155_1SZ.jpg'
  },
  {
    idProduto: '176c3694-f403-47d7-848c-7152ba4950d6',
    codigo: '114523KL',
    nome: 'Galaxy S20 Ultra Cosmic Gray 128GB',
    precoUnitario: 6029.1,
    imagem: 'https://images-submarino.b2w.io/produtos/01/00/img/1521500/7/1521500721_1SZ.jpg'
  }
];
