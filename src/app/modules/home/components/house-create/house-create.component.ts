import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-house-create",
  templateUrl: "./house-create.component.html",
  styleUrls: ["./house-create.component.scss"],
})
export class HouseCreateComponent {
  @Input() houseModels = [];
  @Input() houseStatus = [];
  @Input() houseTypes = [];

  formGroup: FormGroup = new FormGroup({
    houseNumber: new FormControl(),
    blockNumber: new FormControl(),
    landNumber: new FormControl(),
    houseType: new FormControl(),
    houseModel: new FormControl(),
    housePrice: new FormControl(),
    status: new FormControl(),
  });

  submit() {
    if(this.formGroup.invalid){
      return
    }
    
    console.log(this.formGroup.value);
  }
}
