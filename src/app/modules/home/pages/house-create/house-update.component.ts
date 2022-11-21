import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, mergeMap, Observable } from "rxjs";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { SUBMIT_TYPE } from "../../components/house-create/house-create.component";
import { HouseListingStateService } from "../../services/house-listing-state.service";
@Component({
  selector: "app-house-update",
  templateUrl: "./house-update.component.html",
  styleUrls: ["./house-update.component.scss"],
})
export class HouseUpdateComponent implements OnInit {
  houseListing$: Observable<HouseModelsCombiner[]> =
    this.houseListingStateService.houseListing$;
  filterSource$: Observable<any> = this.houseListingStateService.filterSource$;
  metaData$: Observable<any>;
  constructor(
    private houseListingStateService: HouseListingStateService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.metaData$ = this.route.params.pipe(
      mergeMap(({ id }) => this.houseListingStateService.loadById(id))
    );
  }
  submited(_$event: any) {
    if (_$event.submit_type === SUBMIT_TYPE.UPDATE) {
      this.houseListingStateService
        .uppdateHouse(_$event.value, _$event.id)
        .subscribe();
    }
  }
}
