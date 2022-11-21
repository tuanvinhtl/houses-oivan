import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { SUBMIT_TYPE } from "../../components/form-house/form-house.component";
import { HouseListingStateService } from "../../services/house-listing-state.service";

@Component({
  selector: "app-house-management",
  templateUrl: "./house-management.component.html",
  styleUrls: ["./house-management.component.scss"],
})
export class HouseManagementComponent implements OnInit {
  houseListing$: Observable<HouseModelsCombiner[]> =
    this.houseListingStateService.houseListing$;
  filterSource$: Observable<any> = this.houseListingStateService.filterSource$;
  constructor(private houseListingStateService: HouseListingStateService) {}
  ngOnInit(): void {}
  submited(_$event: any) {
    if (_$event.submit_type === SUBMIT_TYPE.CREATE) {
      this.houseListingStateService.createHouse(_$event.value).subscribe();
    }
  }
}
