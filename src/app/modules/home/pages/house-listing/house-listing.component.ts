import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/core/services/api.service";
import { HouseResponse } from "src/app/shared/models/house";

@Component({
  selector: "app-house-listing",
  templateUrl: "./house-listing.component.html",
  styleUrls: ["./house-listing.component.scss"],
})
export class HouseListingComponent implements OnInit {
  constructor(private apiService: ApiService<{}, Array<HouseResponse>>) {}
  ngOnInit(): void {
  }
}
