import axios from "axios";

export const addToCart = (productId) => {
  const token = localStorage.getItem("token");

  return axios.post(
    "http://localhost:4000/api/cart/add",
    { productId },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const getCart = () => {
  const token = localStorage.getItem("token");

  return axios.get("http://localhost:4000/api/cart", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const removeFromCart = (productId) => {
  const token = localStorage.getItem("token");

  return axios.delete(
    `http://localhost:4000/api/cart/remove/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const updateCartQuantity = (productId, quantity) => {
  const token = localStorage.getItem("token");

  return axios.put(
    "http://localhost:4000/api/cart/update",
    { productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

