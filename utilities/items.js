import { VIEWS } from "./enum";
import { ProductListViewModel } from "../public/modules/products/ProductListViewModel.js";
import { NewProductViewModel } from "../public/modules/newProduct/NewProductViewModel.js";
import { LoginViewModel } from "../public/modules/login/LoginViewModel.js";

export const VIEW_MAP = {
  [VIEWS.LOGIN]: {
    htmlFile: "/modules/login/login.html",
    viewModel: () => new LoginViewModel(),
  },
  [VIEWS.PRODUCTS]: {
    htmlFile: "/modules/products/productList.html",
    viewModel: () => new ProductListViewModel(),
  },
  [VIEWS.NEW_PRODUCT]: {
    htmlFile: "/modules/newProduct/newProduct.html",
    viewModel: () => new NewProductViewModel(),
  },
};
