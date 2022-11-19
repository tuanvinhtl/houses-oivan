import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { HouseResponse } from "src/app/shared/models/house";

@Component({
  selector: "app-house-management",
  templateUrl: "./house-management.component.html",
  styleUrls: ["./house-management.component.scss"],
})
export class HouseManagementComponent implements OnInit {
  constructor(private apiService: ApiService<{}, Array<HouseResponse>>) {}
  ngOnInit(): void {}
}
