import axios from "axios";

export const placeOrder = (paymentMethod) => {
  const token = localStorage.getItem("token");
console.log("in placeeeeee");

  return axios.post(
    "http://localhost:4000/api/orders/place",
    { paymentMethod },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const getMyOrders = () => {
  const token = localStorage.getItem("token");

  return axios.get(
    "http://localhost:4000/api/orders/my",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const cancelOrder = (orderId) => {
  const token = localStorage.getItem("token");

  return axios.put(
    `http://localhost:4000/api/orders/cancel/${orderId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );
};
