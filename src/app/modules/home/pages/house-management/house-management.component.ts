import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { Filter } from "src/app/shared/models/filter";
import { HouseResponse } from "src/app/shared/models/house";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { HouseListingStateService } from "../../services/house-listing-state.service";

@Component({
  selector: "app-house-management",
  templateUrl: "./house-management.component.html",
  styleUrls: ["./house-management.component.scss"],
})
export class HouseManagementComponent implements OnInit {
  houseListing$: Observable<HouseModelsCombiner[]> = this.houseListingStateService.houseListing$;
  filterSource$: Observable<any> = this.houseListingStateService.filterSource$;
  constructor(private houseListingStateService: HouseListingStateService) {
  }
  ngOnInit(): void {}
}
