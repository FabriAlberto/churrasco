import { VIEWS } from "./enum";
import { LoginViewModel } from "../modules/login/LoginViewModel.js";
import { ProductListViewModel } from "../modules/products/ProductListViewModel.js";
import { NewProductViewModel } from "../modules/newProduct/NewProductViewModel.js";
export const VIEW_MAP= {
  [VIEWS.LOGIN]: {
      htmlFile: "modules/login/login.html",
      viewModel: () => new LoginViewModel()
  },
  [VIEWS.PRODUCTS]: {
      htmlFile: "modules/products/productList.html",
      viewModel: () => new ProductListViewModel()
  },
  [VIEWS.NEW_PRODUCT]: {
      htmlFile: "modules/newProduct/newProduct.html",
      viewModel: () => new NewProductViewModel()
  }
};