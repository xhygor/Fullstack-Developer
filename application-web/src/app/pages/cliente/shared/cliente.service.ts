import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly clientesUrl = 'http://maximatech.free.beeceptor.com/cliente';

  constructor(private http: HttpClient) {

  }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl);
  }

}
