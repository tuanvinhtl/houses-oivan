import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ToastComponent } from "./components/toast/toast.component";

@NgModule({
  declarations: [BreadcrumbComponent, ToastComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [ReactiveFormsModule, CommonModule, BreadcrumbComponent, ToastComponent],
  providers: [],
})
export class SharedModule {}
