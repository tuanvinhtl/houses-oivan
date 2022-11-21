import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("authentication");
    if (token) {
      request = request.clone({
        setHeaders: {
          authentication: token,
          "Content-Type": "application/vnd.api+json",
        },
      });
    }
    return next.handle(request);
  }
}
