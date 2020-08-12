import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  listaMenuCadastro = [{
    nome: 'Cliente',
    path: 'clientes'
  },
    {
      nome: 'Produto',
      path: 'produtos'
    }];

  listaMenuPedido = [{
    nome: 'Novo pedido',
    path: 'pedido'
  },
    {
      nome: 'Consultar pedido',
      path: 'pedidos'
    }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
