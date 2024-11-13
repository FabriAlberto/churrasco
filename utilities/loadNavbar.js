import { NavbarViewModel } from "../components/NavbarViewModel";
import { VIEWS } from "./enum";
import $ from "jquery";

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
