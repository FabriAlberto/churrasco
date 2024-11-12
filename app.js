import { router } from "./utilities/router.js";
import $ from "jquery";
import "toastify-js/src/toastify.css";
import "bootstrap/dist/js/bootstrap.js";

$(function(){
  router.handleRouteChange();
});
