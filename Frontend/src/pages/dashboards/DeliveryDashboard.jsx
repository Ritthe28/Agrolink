import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";
import axios from "axios";

const DeliveryDashboard = () => {
  const { isloggedin, user } = useappcontaxt();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [availableOrders, setAvailableOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    if (!isloggedin || user?.role !== "delivery") {
      navigate("/login");
      return;
    }

    // Available deliveries
    axios
      .get("http://localhost:4000/api/delivery/orders", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => setAvailableOrders(res.data));

    // My deliveries
    axios
      .get("http://localhost:4000/api/delivery/my", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => setMyOrders(res.data));
  }, [isloggedin, user, navigate, token]);

  const acceptOrder = async (orderId) => {
    await axios.post(
      `http://localhost:4000/api/delivery/accept/${orderId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Remove from available
    setAvailableOrders((prev) =>
      prev.filter((o) => o._id !== orderId)
    );

    // Refresh my deliveries
    const res = await axios.get(
      "http://localhost:4000/api/delivery/my",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setMyOrders(res.data);
  };

  const updateStatus = async (orderId, status) => {
    await axios.put(
      `http://localhost:4000/api/delivery/status/${orderId}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setMyOrders((prev) =>
      prev.map((o) =>
        o._id === orderId ? { ...o, orderStatus: status } : o
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Delivery Dashboard
      </h1>

      {/* AVAILABLE DELIVERIES */}
      <h2 className="text-xl font-semibold mb-3">
        Available Deliveries
      </h2>

      {availableOrders.length === 0 && (
        <p className="mb-6">No available deliveries</p>
      )}

      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {availableOrders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-4 rounded shadow"
          >
            <p>Order ID: {order._id}</p>
            <p>Total: ₹{order.totalAmount}</p>

            <button
              onClick={() => acceptOrder(order._id)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Accept Delivery
            </button>
          </div>
        ))}
      </div>

      {/* MY DELIVERIES */}
      <h2 className="text-xl font-semibold mb-3">
        My Deliveries
      </h2>

      {myOrders.length === 0 && <p>No active deliveries</p>}

      <div className="grid md:grid-cols-2 gap-4">
        {myOrders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-4 rounded shadow"
          >
            <p className="font-semibold">
              Order: {order._id}
            </p>
            <p>Customer: {order.user?.name}</p>
            <p>Status: {order.orderStatus}</p>

            <div className="mt-2 space-x-2">
              {order.orderStatus === "assigned" && (
                <button
                  onClick={() =>
                    updateStatus(order._id, "picked")
                  }
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Picked
                </button>
              )}

              {order.orderStatus === "picked" && (
                <button
                  onClick={() =>
                    updateStatus(order._id, "delivered")
                  }
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Delivered
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryDashboard;
