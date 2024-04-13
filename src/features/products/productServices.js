import axios from "axios";
import { base_url, headersConfig } from "../../utils/axiosConfig";

const getAllProduct = async () => {
  const response = await axios.get(`${base_url}product`);

  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (prodId) => {
  const response = await axios.get(
    `${base_url}product/${prodId}`,
    headersConfig
  );

  if (response.data) {
    return response.data;
  }
};

const addToWishList = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    prodId,
    headersConfig
  );

  if (response.data) {
    return response.data;
  }
};

export const productServices = {
  getAllProduct,
  getSingleProduct,
  addToWishList,
};
