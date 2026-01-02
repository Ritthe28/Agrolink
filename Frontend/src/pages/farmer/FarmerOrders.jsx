import { useEffect, useState } from "react";
import axios from "axios";

const FarmerOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(
      "http://localhost:4000/api/orders/farmer",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    ).then(res => setOrders(res.data));
  }, []);

  return (
    <div className="pt-[10vh] p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">
        Orders for My Products
      </h2>

      {orders.map(order => (
        <div
          key={order._id}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <p>Customer: {order.user.name}</p>
          <p>Status: {order.orderStatus}</p>

          <ul className="text-sm mt-2">
            {order.items.map(i => (
              <li key={i._id}>
                {i.product.name} × {i.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FarmerOrders;
