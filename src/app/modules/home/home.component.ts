import { Component } from "@angular/core";
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
