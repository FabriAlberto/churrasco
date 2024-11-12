import { router } from "../utilities/router.js";
import "toastify-js/src/toastify.css";

$(document).ready(() => {
  router.handleRouteChange();
});
