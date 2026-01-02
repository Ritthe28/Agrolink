import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";

const FarmerProducts = () => {
  const { isloggedin, user } = useappcontaxt();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  // Role guard
  useEffect(() => {
    if (!isloggedin || user?.role !== "farmer") {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:4000/api/products/my", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => setProducts(res.data));
  }, [isloggedin, user, navigate, token]);

  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] p-6">
      <h2 className="text-3xl font-bold mb-6">My Products</h2>

      {products.length === 0 && (
        <p>You haven’t added any products yet.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white p-4 rounded shadow"
          >
            <img
              src={p.images?.[0]}
              alt={p.name}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="font-semibold mt-2">{p.name}</h3>
            <p className="text-gray-600">
              ₹{p.price} / {p.unit}
            </p>

            {/* FUTURE */}
            <button className="mt-2 w-full bg-yellow-500 text-white py-1 rounded">
              Edit
            </button>

            <button className="mt-2 w-full bg-red-500 text-white py-1 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerProducts;
