import { loadNavbar } from "./loadNavbar.js";
import { VIEWS } from "./enum.js";
import { AuthService } from "../services/auth.service.js";
import { VIEW_MAP } from "./items.js";
import $ from "jquery";

class Router {
    constructor() {
        this.routesMenu = [
            { path: `#${VIEWS.PRODUCTS}`, title: "Products" },
            { path: `#${VIEWS.NEW_PRODUCT}`, title: "+ New Product" }
        ];
        this.appContainer = $("#app");
        this.viewMap = VIEW_MAP
        window.addEventListener('hashchange', this.handleRouteChange.bind(this));
        
        $(()=>this.handleRouteChange());
    }

    handleRouteChange() {
        const hash = window.location.hash.slice(1);
        if(!AuthService.isAuthenticated() && hash !== VIEWS.LOGIN){
            this.push(VIEWS.LOGIN);
            return;
        }
        this.navigateTo(hash || VIEWS.LOGIN);
    }

     navigateTo(view) {
      this.appContainer.empty();
      loadNavbar(view);
      
      const config = this.viewMap[view];
      if (!config) {
          console.error("View not recognized:", view);
          return;
      } 
      console.log(config)
      const { htmlFile, viewModel } = config;

      this.appContainer.load(htmlFile, () => {
          try {
              ko.cleanNode(this.appContainer[0]);
              ko.applyBindings(viewModel(), this.appContainer[0]);
          } catch (error) {
              console.error("Error applying Knockout bindings:", error);
          }
      });
  }

    push(view) {
        window.location.hash = `#${view}`;
    }
    path() {
        return window.location.hash;
    }
}

export const router = new Router();


