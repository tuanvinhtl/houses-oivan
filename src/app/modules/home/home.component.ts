import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { forkJoin, map, merge } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { House, HouseResponse } from "src/app/shared/models/house";
import {
  HouseModels,
  HouseModelsCombiner,
} from "src/app/shared/models/house-models";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  houseModelsCombiner: HouseModelsCombiner[] = [];
  constructor(
    private apiService: ApiService<{}, Array<any>>,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    forkJoin({
      houseModels: this.apiService.get("/house_models"),
      houses: this.apiService.get("/houses"),
    })
      .pipe(
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
      )
      .subscribe(
        (houseModelsCombiner: HouseModelsCombiner[]) =>
          (this.houseModelsCombiner = houseModelsCombiner)
      );
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
