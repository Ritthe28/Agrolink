import axios from "axios";

const API = "http://localhost:4000/api/products";

// Get all products (public)
export const getAllProducts = () => {
  return axios.get(API);
};

// Create product (farmer only)
export const createProduct = (formData, token) => {
  return axios.post(API, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};




