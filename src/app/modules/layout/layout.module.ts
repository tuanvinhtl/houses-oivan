import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutRoutingModule } from "./layout-routing.module";
import { HeaderComponent } from "./pages/header/header.component";
import { FooterComponent } from "./pages/footer/footer.component";

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
