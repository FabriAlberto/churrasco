import { NavbarViewModel } from "../components/navbar/NavbarViewModel";
import { VIEWS } from "./enum";

export const loadNavbar = (view) => {
  const navbarContainer = $("#navbar");
  navbarContainer.empty();
  if (view !== VIEWS.LOGIN) {
    console.log('add navbar')
     navbarContainer.load("components/navbar/navbar.html", () => {
      ko.cleanNode(navbarContainer[0]);
      ko.applyBindings(new NavbarViewModel(), navbarContainer[0]);
    });
  } else {
    navbarContainer.empty();
    console.log('clean node')
  }
};
