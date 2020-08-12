import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly produtosURL = 'http://maximatech.free.beeceptor.com/produto';

  constructor(private http: HttpClient) {
  }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosURL);
  }
}
