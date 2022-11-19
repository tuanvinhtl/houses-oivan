import { HttpClient } from "@angular/common/http";
import { IAppConfig } from "../shared/models/app-config.model";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppConfig {
  static settings: IAppConfig;
  constructor(private http: HttpClient) {}

  load() {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((response: any | IAppConfig) => {
          AppConfig.settings = response as IAppConfig;
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
          );
        });
    });
  }
}
