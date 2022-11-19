import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ApiService } from "./services/api.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HttpClientModule, RouterModule],
  providers: [ApiService, AuthService],
})
export class CoreModule {}
