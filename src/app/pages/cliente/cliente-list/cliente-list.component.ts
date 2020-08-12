import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Cliente} from '../shared/cliente.model';
import {ClienteService} from '../shared/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codigo', 'nome'];
  dataSource: MatTableDataSource<Cliente>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: ClienteService) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Cliente>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = ELEMENT_DATA;
    /*this.service.listar().subscribe(resorces => {
      this.dataSource.data = resorces;
      },
      error => {
        alert('Erro ao carregar a lista');
  });*/

  }
}

const ELEMENT_DATA: Cliente[] = [
  {idCliente: '4f8e6b89-7b3f-450d-9f9d-03dba15d6e3a', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Kegyu Guida'},
  {idCliente: 'd758c9df-af24-4a8a-b9b4-f221e76c45be', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Miohu Daein'},
  {idCliente: '40ba630c-e838-4231-82c5-080215420358', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Kauvi Hifio'},
  {idCliente: 'b219af51-3557-43e3-8233-74ceb7a75cd2', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Befey Saoen'},
  {idCliente: 'fbf874af-da87-4b84-a0c3-f35251d566df', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Lyeko Ceotirun'},
  {idCliente: '69227753-526a-429b-856b-a6533e1bb208', codigo: '146bbaf1-f5c3-440b-b60e-52d0a29bc837', nome: 'Mebol Morui'}
];
