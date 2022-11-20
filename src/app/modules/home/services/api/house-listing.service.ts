import { Injectable } from "@angular/core";
import { forkJoin, map, Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { House } from "src/app/shared/models/house";
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

  //   createTodo(todo: Todo): Observable<Todo> {
  //     return this.apiService.post<Todo>(apiUrl, todo);
  //   }

  //   updateTodo(todo: Todo): Observable<Todo> {
  //     return this.apiService.put<Todo>(apiUrl + todo.id, todo);
  //   }

  //   deleteTodo(todo: Todo): Observable<void> {
  //     return this.apiService.delete<void>(apiUrl + todo.id);
  //   }
}
