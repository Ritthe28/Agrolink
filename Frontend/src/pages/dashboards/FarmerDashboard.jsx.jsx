import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";

const FarmerDashboard = () => {
  const { isloggedin, user } = useappcontaxt();
  const navigate = useNavigate();

  if (!isloggedin || user?.role !== "farmer") {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Farmer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* MY PRODUCTS */}
        <div
          onClick={() => navigate("/farmer/products")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-lg">My Products</h3>
          <p className="text-gray-600 mt-2">
            Manage vegetables you are selling
          </p>
        </div>

        {/* ORDERS */}
        <div
          onClick={() => navigate("/farmer/orders")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h3 className="font-semibold text-lg">Orders</h3>
          <p className="text-gray-600 mt-2">
            View incoming orders for your products
          </p>
        </div>

        {/* EARNINGS (PLACEHOLDER) */}
        <div
          className="bg-white p-6 rounded-xl shadow opacity-70 cursor-not-allowed"
        >
          <h3 className="font-semibold text-lg">Earnings</h3>
          <p className="text-gray-600 mt-2">
            Track your income (coming soon)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
