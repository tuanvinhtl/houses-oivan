import { Injectable } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import {
  DataPayload,
  House,
  HouseRequest,
  HouseResponse,
} from "src/app/shared/models/house";
import {
  HouseModels,
  HouseModelsCombiner,
} from "src/app/shared/models/house-models";

@Injectable({ providedIn: "root" })
export class HouseListingService {
  constructor(private apiService: ApiService<any, any>) {}
  getHouseModels(): Observable<HouseModelsCombiner[]> {
    return forkJoin({
      houseModels: this.apiService.get("/house_models"),
      houses: this.apiService.get("/houses"),
    }).pipe(
      map((x) => {
        let houseModels: HouseModelsCombiner[] = [];
        x["houseModels"].map((el: HouseModels) => {
          const query = x["houses"].filter(
            (h: House) => h.attributes.model === el.attributes.model
          );
          if (query) {
            houseModels.push({
              ...el,
              houses: [...query],
            });
          }
        });
        return houseModels as HouseModelsCombiner[];
      })
    );
  }

  create(house: HouseRequest): Observable<HouseResponse> {
    return this.apiService.post("/houses", house);
  }

  update(house: HouseRequest): Observable<HouseResponse> {
    return this.apiService.patch("/houses/" + house.data.id, house);
  }

  get(id: number): Observable<HouseResponse> {
    return this.apiService.get("/houses/" + id);
  }
}
