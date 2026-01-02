import { useEffect, useState } from "react";
import {
  getMyOrders,
  cancelOrder
} from "../../services/orderService";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyOrders().then((res) => setOrders(res.data));
  }, []);

  const handleCancel = async (orderId) => {
    await cancelOrder(orderId);

    setOrders((prev) =>
      prev.map((o) =>
        o._id === orderId
          ? { ...o, orderStatus: "cancelled" }
          : o
      )
    );
  };

  return (
    <div className="pt-[10vh] p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <p className="font-semibold">
            Order ID: {order._id}
          </p>

          <p>
            Status:{" "}
            <span className="font-semibold capitalize">
              {order.orderStatus}
            </span>
          </p>

          <p>Total: ₹{order.totalAmount}</p>

          <ul className="mt-2 text-sm">
            {order.items.map((i) => (
              <li key={i._id}>
                {i.product.name} × {i.quantity}
              </li>
            ))}
          </ul>

          {/* CANCEL BUTTON */}
          {order.orderStatus === "placed" && (
            <button
              onClick={() => handleCancel(order._id)}
              className="mt-3 text-red-500 text-sm"
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
