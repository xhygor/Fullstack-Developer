import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTExMTExMTExMSIsImF1dGgiOiJBRE1JTixVU1VBUklPIiwibmFtZSI6ImFkbWluIiwiZXhwIjoxNTk3MjkxNTIwfQ.Quyw2zhkpIrJQhMr8Hnsz5nDK3GRQqHw3TriLB9_oPsxILjg4Y8Y6-mqBDi28Bzf4bGfELjyFm6Od8xoTbLKRA`
      }
    });
    return next.handle(request);
  }
}
