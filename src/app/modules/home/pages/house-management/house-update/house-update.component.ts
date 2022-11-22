import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { mergeMap, Observable, of } from "rxjs";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import {
  ToastService,
  TOAST_STATE,
} from "src/app/shared/services/toast.service";
import { SUBMIT_TYPE } from "../../../components/form-house/form-house.component";
import { HouseListingStateService } from "../../../services/house-listing-state.service";

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
  id$: Observable<any>;

  constructor(
    private houseListingStateService: HouseListingStateService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}
  ngOnInit(): void {
    this.metaData$ = this.route.params.pipe(
      mergeMap(({ id }) => {
        this.id$ = of(id);
        return this.houseListingStateService.loadById(id);
      })
    );
  }
  submited(_$event: any) {
    if (_$event.submit_type === SUBMIT_TYPE.UPDATE) {
      this.houseListingStateService
        .uppdateHouse(_$event.value, _$event.id)
        .subscribe(
          (x) => {
            this.toast.showToast(TOAST_STATE.success, "look good :)");
            this.dismiss();
          },
          (err) => {
            this.toast.showToast(TOAST_STATE.danger, err[0].detail);
            this.dismiss();
          }
        );
    }
  }
  private dismiss(): void {
    setTimeout(() => {
      this.toast.dismissToast();
    }, 2000);
  }
}
