import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService<T> {
  apiURL = environment.apiServer.url;
  constructor(private http: HttpClient) {}

  get(path: string): Observable<T | any> {
    return this.http.get(this.apiURL + `${path}`);
  }

  post(path: string, body: Object = {}): Observable<T | any> {
    return this.http.post(this.apiURL + `${path}`, body);
  }

  patch(path: string, body: Object = {}): Observable<T | any> {
    return this.http.patch(this.apiURL + `${path}`, body);
  }
}
