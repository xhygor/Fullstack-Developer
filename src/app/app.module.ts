import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LOCALE_ID, NgModule} from '@angular/core';
import Pt from '@angular/common/locales/pt';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './shared/components/nav-bar/nav-bar.component';
import {MenuNavBarComponent} from './shared/components/menu-nav-bar/menu-nav-bar.component';
import {ItemMenuNavBarComponent} from './shared/components/item-menu-nav-bar/item-menu-nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {ClienteListComponent} from './pages/cliente/cliente-list/cliente-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {ClienteService} from './pages/cliente/shared/cliente.service';
import {ProdutoService} from './pages/produto/shared/produto.service';
import {ProdutoListComponent} from './pages/produto/produto-list/produto-list.component';
import {PedidoListComponent} from './pages/pedido/pedido-list/pedido-list.component';
import {registerLocaleData} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {PedidoFormComponent} from './pages/pedido/pedido-form/pedido-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {JwtInterceptor} from './shared/interceptors/jwt.interceptor';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';

registerLocaleData(Pt);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuNavBarComponent,
    ItemMenuNavBarComponent,
    ClienteListComponent,
    ProdutoListComponent,
    PedidoListComponent,
    PedidoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers:
    [ClienteService,
      ProdutoService,
      {provide: LOCALE_ID, useValue: 'pt'},
      {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
      {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500 ,verticalPosition: 'top'}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
