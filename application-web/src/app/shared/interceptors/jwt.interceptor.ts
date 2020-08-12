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
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMTExMTExMTExMSIsImF1dGgiOiJBRE1JTixVU1VBUklPIiwibmFtZSI6ImFkbWluIiwiZXhwIjoxNTk3MjQ4NzEzfQ.uMpUP4hDiWJLjfdPx_M9mRzkZYNIM2iFG-84PhFYP74RpQXcwLIhLiHqJgBPDlPufe8D7KrHZrkYtsc8F_b4Hw`
      }
    });
    return next.handle(request);
  }
}
