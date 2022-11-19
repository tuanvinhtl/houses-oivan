import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ApiService } from "src/app/core/services/api.service";
import { AuthRequest, AuthResponse } from "src/app/shared/models/auth-model";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private apiService: ApiService<AuthRequest, AuthResponse>) {}

  signIn(f: NgForm) {
    if (f.invalid) {
      return;
    }
    this.apiService
      .post("/auth", {
        data: {
          type: "auth",
          attributes: f.value,
        },
      })
      .subscribe((auth: AuthResponse) => {
        if (auth) {
          localStorage.setItem(
            "authentication",
            auth.attributes.token
          ) as any;
          localStorage.setItem("_USER_INFO", JSON.stringify(auth));
        }
      });
  }
  signOut() {
    localStorage.clear();
  }

  get isAuthenticated() {
    const token = localStorage.getItem("authentication");
    return token;
  }
}
