import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { mergeMap, Observable, of } from "rxjs";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import {
  ToastService,
  TOAST_STATE,
} from "src/app/shared/services/toast.service";
import { SUBMIT_TYPE } from "../../../components/form-house/form-house.component";
import { InfratructureComponent } from "../../../helper/infratructure.base";
import { HouseListingStateService } from "../../../services/house-listing-state.service";

@Component({
  selector: "app-house-update",
  templateUrl: "./house-update.component.html",
  styleUrls: ["./house-update.component.scss"],
})
export class HouseUpdateComponent
  extends InfratructureComponent
  implements OnInit
{
  metaData$: Observable<any>;
  id$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    protected override houseListingStateService: HouseListingStateService,
    protected override toastService: ToastService
  ) {
    super(houseListingStateService, toastService);
  }
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
      this.houseListingStateService.uppdateHouse(_$event.value, _$event.id)
        .subscribe({
          complete: () => this.showToast(TOAST_STATE.success, "We are good :)"),
          error: ({ error }) => this.showToast(TOAST_STATE.danger, error.errors[0].title)
        });
    }
  }
}
