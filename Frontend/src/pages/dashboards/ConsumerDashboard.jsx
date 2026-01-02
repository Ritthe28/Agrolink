import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";

const ConsumerDashboard = () => {
  const { isloggedin, user } = useappcontaxt();
  const navigate = useNavigate();

  if (!isloggedin || user?.role !== "consumer") {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Consumer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Browse Market</h3>
          <p className="text-gray-600 mt-2">
            Find fresh vegetables
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">My Orders</h3>
          <p className="text-gray-600 mt-2">
            Track your purchases
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
