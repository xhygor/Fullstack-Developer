import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pedido} from './pedido.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly pedidosURL = 'https://application-server-maxima-tech.herokuapp.com/api/pedidos';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.pedidosURL);
  }

  finalizarPedido(pedido: Pedido): Observable<Pedido> {
    console.log(pedido);
    return this.http.post(this.pedidosURL, pedido).pipe(map(Pedido.fromJson.bind(this)));
  }
}
