import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from "@angular/core";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";

@Component({
  selector: "app-house-models",
  templateUrl: "./house-models.component.html",
  styleUrls: ["./house-models.component.scss"],
})
export class HouseModelsComponent {
  @Input()
  houseModels: HouseModelsCombiner | undefined;
  @Output()
  rowClicked = new EventEmitter();
  @Input("thRef")
  thRef: TemplateRef<any>;
  @Input("tdRef")
  tdRef: TemplateRef<any>;
}
