
import { router } from "../../utilities/router.js";
import { AuthService } from "../../services/auth.service.js";
import { VIEWS } from "../../utilities/enum.js";
export class LoginViewModel {
  constructor() {
    this.username = ko.observable("");
    this.password = ko.observable("");
    this.errorMessage = ko.observable("");
    this.isLoading= ko.observable(false);
    this.initModule();
  }
  initModule() {
    if (AuthService.isAuthenticated()) {
      router.push(VIEWS.PRODUCTS)
    }
  }
  async login() {
    this.errorMessage("");
    this.isLoading(true);
    const response = await AuthService.login(this.username(), this.password());
    this.isLoading(false);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
      router.push(VIEWS.PRODUCTS)
    } else {
      this.errorMessage(response.errorMessage);
    }
  }
}
