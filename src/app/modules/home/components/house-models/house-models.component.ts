import { Component, Input, OnInit } from "@angular/core";
import { House } from "src/app/shared/models/house";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";

@Component({
  selector: "app-house-models",
  templateUrl: "./house-models.component.html",
  styleUrls: ["./house-models.component.scss"],
})
export class HouseModelsComponent {
  @Input()
  houseModels: HouseModelsCombiner | undefined;
}
