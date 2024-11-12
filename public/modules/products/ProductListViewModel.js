import { getProducts } from "../../../services/api.service.js";
import { AuthService } from "../../../services/auth.service.js";
import { VIEWS } from "../../../utilities/enum.js";
import { router } from "../../../utilities/router.js";

export class ProductListViewModel {
  constructor() {
    this.products = ko.observableArray([]);
    this.isLoading = ko.observable(false);
    this.search = ko.observable("");
    this.productsFiltered = ko.observableArray([]);
    this.visibleProductCount = 12;
    this.totalProducts = ko.observable(0);
    this.loadProducts();
    this.updateFilteredProducts();
    this.search.subscribe(() => {
      this.visibleProductCount = 12;
      this.updateFilteredProducts();
    });
  }

  async loadProducts() {
    if (!AuthService.isAuthenticated()) {
      router.push(VIEWS.LOGIN);
      return;
    }
    this.isLoading(true);
    const response = await getProducts(localStorage.getItem("token"));
    if (response.success) {
      this.products(response.data);
      this.totalProducts(response.data.length);
      this.updateFilteredProducts();
    } else {
      console.log(response.errorMessage);
      localStorage.removeItem("token");
      router.push(VIEWS.LOGIN);
    }
    this.isLoading(false);
  }

  updateFilteredProducts() {
    let filteredProducts = this.products();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(this.search().toLowerCase()) ||
        product.description?.toLowerCase().includes(this.search().toLowerCase())
    );
    this.totalProducts(filteredProducts.length);
    this.productsFiltered(filteredProducts.slice(0, this.visibleProductCount));
  }

  handleShowMore() {
    this.visibleProductCount += 12;
    this.updateFilteredProducts();
  }
}
