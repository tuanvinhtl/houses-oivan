import { Component, OnInit } from "@angular/core";
import { Filter } from "src/app/shared/models/filter";
import { InfratructureComponent } from "../../../helper/infratructure.base";
import { HouseListingStateService } from "../../../services/house-listing-state.service";

@Component({
  selector: "app-house-index",
  templateUrl: "./house-index.component.html",
  styleUrls: ["./house-index.component.scss"],
})
export class HouseIndexComponent extends InfratructureComponent{
  constructor(
    protected override houseListingStateService: HouseListingStateService
  ) {
    super(houseListingStateService);
  }
}
