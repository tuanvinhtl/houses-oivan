import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class ApiService<T, K> {
  apiURL = environment.apiServer.url;
  constructor(private http: HttpClient) {}

  get(path: string): Observable<K> {
    return this.http
      .get(this.apiURL + `${path}`)
      .pipe(map((x: K | any) => x.data));
  }

  post(path: string, body: T | Array<T> | Object = {}): Observable<K> {
    return this.http
      .post(this.apiURL + `${path}`, body)
      .pipe(map((x: K | any) => x.data));
  }

  patch(path: string,body: T | Array<T> | Object = {}): Observable<K> {
    return this.http
      .patch(this.apiURL + `${path}`, body)
      .pipe(map((x: K | any) => x.data));
  }
}
