import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://bvz-back.herokuapp.com/api/vertoken"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.auth = `Bearer ${token}`;
  }
  return config;
});

export default api;