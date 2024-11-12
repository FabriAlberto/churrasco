import { createApiClient } from "./api-client.js";

export const login = async (username, password) => {
  try {
    const { data } = await createApiClient().post("/login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getProducts = async (token) => {
  try {
    const { data } = await createApiClient().get("/products");
    return data;
  } catch (error) {
    return error;
  }
};

export const createProduct = async (productData) => {
  try {
    const { data } = await createApiClient().post("/addproduct", productData);
    return data;
  } catch (error) {
    return error;
  }
};
