import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { forkJoin, map, merge, Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { Filter } from "src/app/shared/models/filter";
import { House, HouseResponse } from "src/app/shared/models/house";
import {
  HouseModels,
  HouseModelsCombiner,
} from "src/app/shared/models/house-models";
import { HouseListingStateService } from "./services/house-listing-state.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  houseModelsCombiner: HouseModelsCombiner[] = [];
  houseListing$: Observable<HouseModelsCombiner[]> = this.houseListingStateService.houseListing$;
  filter$: Observable<Filter> = this.houseListingStateService.filter$;

  constructor(private houseListingStateService: HouseListingStateService) {}
  ngOnInit(): void {
  }

}
