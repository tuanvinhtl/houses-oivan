import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Filter } from "src/app/shared/models/filter";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { HouseListingStateService } from "../../../services/house-listing-state.service";

@Component({
  selector: "app-house-index",
  templateUrl: "./house-index.component.html",
  styleUrls: ["./house-index.component.scss"],
})
export class HouseIndexComponent {
  houseListing$: Observable<HouseModelsCombiner[]> =
    this.houseListingStateService.houseListing$;
  filterSource$: Observable<any> = this.houseListingStateService.filterSource$;
  filter$: Observable<Filter> = this.houseListingStateService.filter$;
  constructor(private houseListingStateService: HouseListingStateService) {}

  onFilterUpdate(filter: Filter) {
    this.houseListingStateService.updateFilter(filter);
  }
}
