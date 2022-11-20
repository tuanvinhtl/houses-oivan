import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Filter } from "src/app/shared/models/filter";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { HouseListingStateService } from "../../services/house-listing-state.service";

@Component({
  selector: "app-wrapper-house-models",
  templateUrl: "./wrapper-house-models.component.html",
  styleUrls: ["./wrapper-house-models.component.scss"],
})
export class WrapperHouseModelsComponent {
  houseModelsCombiner: HouseModelsCombiner[] = [];
  houseListing$: Observable<HouseModelsCombiner[]> = this.houseListingStateService.houseListing$;
  filter$: Observable<Filter> = this.houseListingStateService.filter$;
  constructor(private houseListingStateService: HouseListingStateService) {
  }

  onFilterUpdate(filter: Filter) {
    this.houseListingStateService.updateFilter(filter);
  }
}
