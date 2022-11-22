import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from "@angular/core";
import { Observable } from "rxjs";
import { Filter } from "src/app/shared/models/filter";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";
import { HouseListingStateService } from "../../services/house-listing-state.service";

@Component({
  selector: "app-wrapper-house-models",
  templateUrl: "./wrapper-house-models.component.html",
  styleUrls: ["./wrapper-house-models.component.scss"],
})
export class WrapperHouseModelsComponent {
  @Input("actionRef")
  actionRef: TemplateRef<any>;
  @Input("thRef")
  thRef: TemplateRef<any>;
  @Input("tdRef")
  tdRef: TemplateRef<any>;
  @Output() onFilterUpdate = new EventEmitter();
  @Input("houseListing") houseListing$: Observable<HouseModelsCombiner[]>;
  @Input("filter") filter$: Observable<Filter>;
  @Input("filterSource") filterSource$: Observable<Filter>;
  onEmitFilter(filter: Filter) {
    this.onFilterUpdate.emit(filter);
  }
}
