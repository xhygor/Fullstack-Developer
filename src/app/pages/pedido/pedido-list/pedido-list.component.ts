import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Pedido} from '../shared/pedido.model';
import {PedidoService} from '../shared/pedido.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'valorTotal', 'quantidade', 'valorFrete'];
  dataSource: MatTableDataSource<Pedido>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: PedidoService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Pedido>();
    this.dataSource.paginator = this.paginator;
    this.service.listar().subscribe(resorces => {
        this.dataSource.data = resorces;
      },
      error => {
        alert('Erro ao carregar a lista');
      });
  }

  totalItens(pedido: Pedido): number{
    let totalItens = 0;
    if (pedido.itensPedido) {
      pedido.itensPedido.forEach(i => totalItens += i.quantidadeItens);
    }
    return totalItens;
  }
}
