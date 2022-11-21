import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IAttributes } from "src/app/shared/models/house";

export enum SUBMIT_TYPE {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

@Component({
  selector: "app-house-create",
  templateUrl: "./house-create.component.html",
  styleUrls: ["./house-create.component.scss"],
})
export class HouseCreateComponent implements OnInit {
  @Input() houseModels = [];
  @Input() houseStatus = [];
  @Input() houseTypes = [];
  @Input() id: Number;
  @Input() set metaData(metaData: IAttributes | any) {
    this.formGroup.patchValue(metaData);
  }
  @Output() submited = new EventEmitter();

  formGroup: FormGroup = new FormGroup({
    house_number: new FormControl(null, Validators.required),
    block_number: new FormControl(null, Validators.required),
    land_number: new FormControl(null, Validators.required),
    house_type: new FormControl(null, Validators.required),
    model: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    status: new FormControl(null),
  });

  ngOnInit(): void {}

  submit() {
    if (this.formGroup.invalid) {
      return;
    }
    if (this.id) {
      this.submited.emit({
        submit_type: SUBMIT_TYPE.UPDATE,
        value: this.formGroup.value,
        id: this.id,
      });
    } else {
      this.submited.emit({
        submit_type: SUBMIT_TYPE.CREATE,
        value: this.formGroup.value,
      });
    }
  }

  get houseNumber() {
    return this.formGroup.get("house_number");
  }
  get blockNumber() {
    return this.formGroup.get("block_number");
  }
  get landNumber() {
    return this.formGroup.get("land_number");
  }
  get houseType() {
    return this.formGroup.get("house_type");
  }
  get price() {
    return this.formGroup.get("price");
  }
  get model() {
    return this.formGroup.get("model");
  }
}
