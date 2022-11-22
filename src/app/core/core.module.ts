import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ApiService } from "./services/api.service";
import { JwtInterceptor } from "./interceptors/http.token.interceptor";
import { AuthGuardService } from "./guards/AuthGuardService";
import { ErrorInterceptor } from "./interceptors/error-handler.interceptor";

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HttpClientModule, RouterModule],
  providers: [
    ApiService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class CoreModule {}
