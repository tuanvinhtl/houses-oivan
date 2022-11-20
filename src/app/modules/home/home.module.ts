import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AccordionGroupComponent } from "./components/accordion/accordion-group.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { FilterComponent } from "./components/filter/filter.component";
import { HouseModelsComponent } from "./components/house-models/house-models.component";
import { WrapperHouseModelsComponent } from "./components/wrapper-house-models/wrapper-house-models.component";
import { HomeComponent } from "./home.component";
import { HouseListingComponent } from "./pages/house-listing/house-listing.component";
import { HouseManagementComponent } from "./pages/house-management/house-management.component";
import { HouseListingService } from "./services/api/house-listing.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "house-management", component: HouseManagementComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    HouseManagementComponent,
    FilterComponent,
    HouseListingComponent,
    HouseModelsComponent,
    WrapperHouseModelsComponent,
    AccordionGroupComponent,
    AccordionComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [HouseListingService],
})
export class HomeModule {}
