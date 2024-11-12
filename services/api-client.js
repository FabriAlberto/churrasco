import axios from "axios";
import {config} from "../config"
export function createApiClient() {
  const token = localStorage.getItem("token");
  const urlBase=config.api.url;
  const axiosConfig = {
    baseURL: urlBase,
    headers: {
      Authorization: `Bearer ${token} `,
    },
    ...config,
  };
  const axiosClient = axios.create(axiosConfig);

  axiosClient.interceptors.response.use(
    (response) => {
      return {
        ...response,
        data: {
          success: true,
          data: response.data,
          errorMessage: null,
        },
      };
    },
    (error)=> {
      if (error.response?.status === 403 || error.response?.status === 401) {
        window.location.href = "/";
      }
     console.log(error)
      const message = error.response?.data.msg;
      let errorMessage = "Unknown error";
      if (Array.isArray(message)) {
        errorMessage = message.join(", ");
      } else if (typeof message === "string") {
        errorMessage = message;
      }
      return Promise.reject({
        success: false,
        data: null,
        errorMessage,
        errorCode: error.response?.data.code || undefined,
      });
    }
  );
  return axiosClient;
}
