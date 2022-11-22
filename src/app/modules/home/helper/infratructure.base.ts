import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Filter } from "src/app/shared/models/filter";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import {
  ToastService,
  TOAST_STATE,
} from "src/app/shared/services/toast.service";
import { HouseListingStateService } from "../services/house-listing-state.service";

@Injectable()
export abstract class InfratructureComponent {
  houseListing$: Observable<HouseModelsCombiner[]> =
    this.houseListingStateService.houseListing$;
  filterSource$: Observable<any> = this.houseListingStateService.filterSource$;
  filter$: Observable<Filter> = this.houseListingStateService.filter$;
  constructor(
    protected houseListingStateService: HouseListingStateService,
    protected toastService?: ToastService
  ) {}

  public dismiss(): void {
    setTimeout(() => {
      this.toastService?.dismissToast();
    }, 2000);
  }

  public showToast(state: string, message: string) {
    this.toastService?.showToast(state, message);
    this.dismiss();
  }

  onFilterUpdate(filter: Filter) {
    this.houseListingStateService.updateFilter(filter);
  }
}
