import {axiosClient} from '../utils/axiosClient';
import Cookies from "js-cookie";

export const login = async(data) => {
  const res = await axiosClient.post("auth/login", data);
  return res;
}

export const getCurrentUser = async() => {
  axiosClient.defaults.headers.common["Authorization"] = Cookies.get("token");
  const res = await axiosClient.get("users");
  return res;
}
