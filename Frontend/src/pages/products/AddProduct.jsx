import { useState } from "react";
import { createProduct } from "../../services/productService";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    price: "",
    quantityAvailable: "",
    unit: "kg",
    description: ""
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("quantityAvailable", form.quantityAvailable);
      formData.append("unit", form.unit);
      formData.append("description", form.description);

      if (image) {
        formData.append("image", image); // 👈 matches multer.single("image")
      }

      await createProduct(formData, token);

      alert("Product added successfully");
      navigate("/farmer/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Product upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-[10vh] px-4 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Product name"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="number"
            name="quantityAvailable"
            placeholder="Quantity available"
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />

          <select
            name="unit"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="kg">Kg</option>
            <option value="gram">Gram</option>
            <option value="piece">Piece</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
