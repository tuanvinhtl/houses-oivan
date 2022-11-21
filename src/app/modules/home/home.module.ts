import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { FilterComponent } from "./components/filter/filter.component";
import { HouseCreateComponent } from "./components/house-create/house-create.component";
import { HouseModelsComponent } from "./components/house-models/house-models.component";
import { WrapperHouseModelsComponent } from "./components/wrapper-house-models/wrapper-house-models.component";
import { HomeComponent } from "./home.component";
import { HouseUpdateComponent } from "./pages/house-create/house-update.component";
import { HouseListingComponent } from "./pages/house-listing/house-listing.component";
import { HouseManagementComponent } from "./pages/house-management/house-management.component";
import { HouseListingService } from "./services/api/house-listing.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "house-management",
    component: HouseManagementComponent,
  },
  {
    path: "house-management/update/:id",
    component: HouseUpdateComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HouseManagementComponent,
    FilterComponent,
    HouseListingComponent,
    HouseModelsComponent,
    WrapperHouseModelsComponent,
    AccordionComponent,
    HouseCreateComponent,
    HouseUpdateComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [HouseListingService],
})
export class HomeModule {}
