import axios from "axios";
import { base_url, headersConfig } from "../../utils/axiosConfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);

  if (response.data) {
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const getWishlistUser = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, headersConfig);
  
  if (response.data) {
    return response.data;
  }
};

export const authService = { register, login, getWishlistUser };
