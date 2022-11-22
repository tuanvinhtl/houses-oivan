import { Component } from "@angular/core";
import { HouseListingStateService } from "../../services/house-listing-state.service";

@Component({
  selector: "app-house-management",
  templateUrl: "./house-management.component.html",
  styleUrls: ["./house-management.component.scss"],
})
export class HouseManagementComponent {
  constructor(
    private  houseListingStateService: HouseListingStateService
  ) {
    this.houseListingStateService.load();
  }
}
