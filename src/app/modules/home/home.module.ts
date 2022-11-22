import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { FilterComponent } from "./components/filter/filter.component";
import { FormHouseComponent } from "./components/form-house/form-house.component";
import { HouseModelsComponent } from "./components/house-models/house-models.component";
import { WrapperHouseModelsComponent } from "./components/wrapper-house-models/wrapper-house-models.component";
import { HomeComponent } from "./home.component";
import { HouseManagementComponent } from "./pages/house-management/house-management.component";
import { HouseListingService } from "./services/api/house-listing.service";
import { HouseCreateComponent } from "./pages/house-management/house-create/house-create.component";
import { HouseUpdateComponent } from "./pages/house-management/house-update/house-update.component";
import { HouseIndexComponent } from "./pages/house-management/house-index/house-index.component";
import { AuthGuardService } from "src/app/core/guards/AuthGuardService";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "house-management",
    component: HouseManagementComponent,
    data: {
      breadcrumb: "House Management",
    },
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    children: [
      { path: "", component: HouseIndexComponent },
      {
        path: "create",
        component: HouseCreateComponent,
        data: {
          breadcrumb: "Create",
        },
      },
      {
        path: "update/:id",
        component: HouseUpdateComponent,
        data: {
          breadcrumb: "Update",
        },
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HouseManagementComponent,
    FilterComponent,
    HouseModelsComponent,
    WrapperHouseModelsComponent,
    AccordionComponent,
    FormHouseComponent,
    HouseUpdateComponent,
    HouseCreateComponent,
    HouseIndexComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  providers: [HouseListingService],
})
export class HomeModule {}
