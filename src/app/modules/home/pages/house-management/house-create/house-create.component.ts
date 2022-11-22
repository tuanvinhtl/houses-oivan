import { Component } from "@angular/core";
import {
  ToastService,
  TOAST_STATE,
} from "src/app/shared/services/toast.service";
import { SUBMIT_TYPE } from "../../../components/form-house/form-house.component";
import { InfratructureComponent } from "../../../helper/infratructure.base";
import { HouseListingStateService } from "../../../services/house-listing-state.service";
@Component({
  selector: "app-house-create",
  templateUrl: "./house-create.component.html",
  styleUrls: ["./house-create.component.scss"],
})
export class HouseCreateComponent extends InfratructureComponent {
  constructor(
    protected override houseListingStateService: HouseListingStateService,
    protected override toastService: ToastService
  ) {
    super(houseListingStateService, toastService);
  }
  submited(_$event: any) {
    if (_$event.submit_type === SUBMIT_TYPE.CREATE) {
      this.houseListingStateService.createHouse(_$event.value).subscribe({
        complete: () => this.showToast(TOAST_STATE.success, "We are good :)"),
        error: ({ error }) => this.showToast(TOAST_STATE.danger, error.errors[0].title)
      });
    }
  }
}
