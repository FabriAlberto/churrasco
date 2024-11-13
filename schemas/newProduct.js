import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  currency: Yup.string().required("Currency is required"),
  description: Yup.string().required("Description is required"),
  sku: Yup.string().required("SKU is required"),
  code: Yup.string().required("Code is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  imagesUrls: Yup.array().min(1, "At least one image is required"),
});