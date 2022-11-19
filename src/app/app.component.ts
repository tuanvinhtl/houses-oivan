import { Component, OnInit } from "@angular/core";
import { AppConfig } from "./configs/app-settings.config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log("CONFIGURATION:", AppConfig.settings);
  }
  title = "houses-oivan";
}
