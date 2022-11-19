import { Component, Input, OnInit } from "@angular/core";
import { HouseModelsCombiner } from "src/app/shared/models/house-models";

@Component({
  selector: "app-wrapper-house-models",
  templateUrl: "./wrapper-house-models.component.html",
  styleUrls: ["./wrapper-house-models.component.scss"],
})
export class WrapperHouseModelsComponent {
  @Input() houseModels: any;

  constructor(){
  }
}
