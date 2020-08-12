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
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTExMTExMTExMSIsImF1dGgiOiJBRE1JTixVU1VBUklPIiwibmFtZSI6ImFkbWluIiwiZXhwIjoxNTk3Mjg4NjQxfQ.g3GQTrIFGN9mD9zTtwV1AzwGXfJum_eweG2R89vAdXHmd7JjGXqG-vjE-x2IUePbfaefyEBR7AnoE0n8cIcDsA`
      }
    });
    return next.handle(request);
  }
}
