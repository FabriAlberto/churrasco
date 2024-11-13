import { AuthService } from "../services/auth.service";
import { router } from "../utilities/router";

export class NavbarViewModel {
  constructor() {
    this.items = ko.observableArray(router.routesMenu);
    this.activeItem = router.path();
  }
  logout() {
    AuthService.logout();
  }
}