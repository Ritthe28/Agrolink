import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";

const SellerDashboard = () => {
  const { isloggedin, user } = useappcontaxt();
  const navigate = useNavigate();

  if (!isloggedin || user?.role !== "seller") {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Seller Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Inventory</h3>
          <p className="text-gray-600 mt-2">
            Manage stock
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-gray-600 mt-2">
            Handle customer orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
