import { VIEWS } from "./enum";
import { ProductListViewModel } from "/modules/ProductListViewModel.js";
import { NewProductViewModel } from "/modules/NewProductViewModel.js";
import { LoginViewModel } from "/modules/LoginViewModel.js";

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
