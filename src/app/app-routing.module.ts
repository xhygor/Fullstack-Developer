import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteListComponent} from './pages/cliente/cliente-list/cliente-list.component';
import {ProdutoListComponent} from './pages/produto/produto-list/produto-list.component';
import {PedidoListComponent} from './pages/pedido/pedido-list/pedido-list.component';
import {PedidoFormComponent} from './pages/pedido/pedido-form/pedido-form.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'produtos', component: ProdutoListComponent},
  {path: 'pedidos', component: PedidoListComponent},
  {path: 'pedido', component: PedidoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
