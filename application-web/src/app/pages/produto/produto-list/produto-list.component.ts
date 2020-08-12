import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProdutoService} from '../shared/produto.service';
import {MatPaginator} from '@angular/material/paginator';
import {Produto} from '../shared/produto.model';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})

export class ProdutoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codigo', 'nome', 'precoUnitario'];
  dataSource: MatTableDataSource<Produto>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: ProdutoService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Produto>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = ELEMENT_DATA;
    /*his.service.listar().subscribe(resorces => {
        this.dataSource.data = resorces;
      },
      error => {
        alert('Erro ao carregar a lista');
      });*/
  }
}

const ELEMENT_DATA: Produto[] = [
  {idProduto: '176c3694-f403-47d7-848c-7152ba4950d6', codigo: '12', nome: 'iPhone 11 Apple com 128GB, Tela Retina HD de 6,1”, iOS 13, Dupla Câmera Traseira de 12 MP, Resistente à Água e Bateria de Longa Duração - Branco', precoUnitario: 4699},
  {idProduto: '176c3694-f403-47d7-848c-7152ba4950d6', codigo: '35', nome: 'Monitor Widescreen LCD LED 18.5” AOC HD E970SWNL', precoUnitario: 444.9},
  {idProduto: '176c3694-f403-47d7-848c-7152ba4950d6', codigo: '312800A', nome: 'Fogão 3 Bocas 1 Dupla Cristalaço Industrial Baixa Pressão', precoUnitario: 718.08},
  {idProduto: '176c3694-f403-47d7-848c-7152ba4950d6', codigo: '478ZB', nome: 'Fone de Ouvido Apple AirPods 2 com Estojo de Recarga', precoUnitario: 1099},
  {idProduto: '176c3694-f403-47d7-848c-7152ba4950d6', codigo: '114523KL', nome: 'Galaxy S20 Ultra Cosmic Gray 128GB', precoUnitario: 6029.1}
];
