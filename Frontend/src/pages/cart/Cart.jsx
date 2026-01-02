import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  updateCartQuantity
} from "../../services/cartService";
import { placeOrder } from "../../services/orderService.js";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  useEffect(() => {
    getCart().then((res) => setCart(res.data));
  }, []);

  if (!cart || cart.items.length === 0) {
    return (
      <div className="pt-[10vh] p-6">
        <h2 className="text-xl">Your cart is empty</h2>
      </div>
    );
  }

  const total = cart.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    await placeOrder(paymentMethod);
    alert("Order placed successfully");
    setCart(null); // clear UI after order
  };

  const handleRemove = async (productId) => {
    const res = await removeFromCart(productId);
    setCart(res.data);
  };

  const handleQuantityChange = async (productId, quantity) => {
    if (quantity < 1) return;

    const res = await updateCartQuantity(productId, quantity);
    setCart(res.data);
  };

  return (
    <div className="pt-[10vh] p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Cart</h2>

      {cart.items.map((item) => (
        <div
          key={item.product._id}
          className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center"
        >
          {/* LEFT */}
          <div>
            <p className="font-semibold">{item.product.name}</p>
            <p className="text-sm text-gray-500">
              ₹{item.product.price} each
            </p>
          </div>

          {/* MIDDLE – QUANTITY */}
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(
                item.product._id,
                Number(e.target.value)
              )
            }
            className="w-16 border px-2 py-1 rounded"
          />

          {/* RIGHT */}
          <div className="text-right">
            <p className="font-semibold">
              ₹{item.product.price * item.quantity}
            </p>

            <button
              onClick={() => handleRemove(item.product._id)}
              className="text-red-500 text-sm mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-4">
        Total: ₹{total}
      </h3>

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mt-4 border p-2 rounded"
      >
        <option value="COD">Cash on Delivery</option>
        <option value="ONLINE">Online</option>
      </select>

      <button
        onClick={handlePlaceOrder}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;
