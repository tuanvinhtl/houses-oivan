import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  exports: [ReactiveFormsModule, CommonModule, BreadcrumbComponent],
  providers: [],
})
export class SharedModule {}
