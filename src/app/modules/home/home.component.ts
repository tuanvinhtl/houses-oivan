import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { forkJoin, map, merge, Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { Filter } from "src/app/shared/models/filter";
import { House, HouseResponse } from "src/app/shared/models/house";
import {
  HouseModels,
  HouseModelsCombiner,
} from "src/app/shared/models/house-models";
import { InfratructureComponent } from "./helper/infratructure.base";
import { HouseListingStateService } from "./services/house-listing-state.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent extends InfratructureComponent {
  constructor(
    protected override houseListingStateService: HouseListingStateService
  ) {
    super(houseListingStateService);
    this.houseListingStateService.load();
  }
}
