import { VIEWS } from "../utilities/enum";
import { router } from "../utilities/router";
import { login } from "./api.service";

export const AuthService = {
  isAuthenticated: () => !!localStorage.getItem("token"),

  login: async (username, password) => {
    const response = await login(username, password);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  },

  logout: () => {
    localStorage.removeItem("token");
    router.push(VIEWS.LOGIN)
  }
};
