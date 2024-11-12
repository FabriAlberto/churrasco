import { myWidget } from "../../../services/cloudinary/uploadWidget.service.js";
import { VIEWS } from "../../../utilities/enum.js";
import { router } from "../../../utilities/router.js";
import { createProduct } from "../../../services/api.service.js";
import Toastify from "toastify-js";

export class NewProductViewModel {
  constructor() {
    this.product = ko.observable({
      name: "",
      currency: "",
      description: "",
      sku: "",
      code: "",
      price: "",
      imagesUrls: [],
    });
    this.isLoading = ko.observable(false);

    this.myWidget = myWidget((result) => {
      const currentImages = this.product().imagesUrls.slice();
      currentImages.push(result.info.url);
      this.product().imagesUrls = currentImages;
      this.product.valueHasMutated();
    });
  }

  async addProduct() {
    this.isLoading(true);
    const { name, description, sku, code, price, imagesUrls, currency } =
      this.product();

    const res = await createProduct({
      name,
      description,
      SKU: sku,
      code,
      price,
      pictures: imagesUrls,
      currency,
    });

    this.showToast(
      res.success ? "Product added successfully" : "Error adding product",
      res.success
    );

    if (res.success) {
      router.push(VIEWS.PRODUCTS);
    } else {
      console.log(res.errorMessage);
    }

    this.isLoading(false);
  }

  showToast(message, success) {
    Toastify({
      text: message,
      duration: 3000,
      newWindow: true,
      gravity: "top",
      position: "center",
      style: {
        background: success ? "#49e66b" : "#f65050",
      },
    }).showToast();
  }

  removeImage(url) {
    const updatedImages = this.product().imagesUrls.filter(
      (image) => image !== url
    );
    this.product().imagesUrls = updatedImages;
    this.product.valueHasMutated();
  }

  uploadImages() {
    this.myWidget.open();
  }

  cancel() {
    router.push(VIEWS.PRODUCTS);
  }
}
