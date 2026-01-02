import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";
import { addToCart } from "../../services/cartService";
import { useNavigate } from "react-router-dom";
import { useappcontaxt } from "../../context/Appcontext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { isloggedin } = useappcontaxt();

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.products || res.data);
    });
  }, []);

  const handleAddToCart = async (productId) => {
    if (!isloggedin) {
      navigate("/login");
      return;
    }

    try {
      await addToCart(productId);
      alert("Product added to cart");
    } catch (error) {
      alert("Failed to add product to cart");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] p-6">
      <h2 className="text-3xl font-bold mb-6">Fresh Products</h2>

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

            <button
              onClick={() => handleAddToCart(p._id)}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
