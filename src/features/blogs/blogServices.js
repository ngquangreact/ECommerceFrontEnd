import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getAllBlog = async () => {
  const response = await axios.get(`${base_url}blog`);

  if (response.data) {
    return response.data;
  }
};

const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`);

  if (response.data) {
    return response.data;
  }
};

export const blogServices = { getAllBlog, getBlog };
