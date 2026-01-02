import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home_Page from "../pages/Home_Page";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Profile from "../pages/Profile.jsx";
import FarmerDashboard from "../pages/dashboards/FarmerDashboard.jsx.jsx";
import SellerDashboard from "../pages/dashboards/SellerDashboard.jsx";
import ConsumerDashboard from "../pages/dashboards/ConsumerDashboard.jsx";
import DeliveryDashboard from "../pages/dashboards/DeliveryDashboard.jsx";
import Layout from "../Components/Layout.jsx";
import ProductList from "../pages/products/ProductList.jsx";
import AddProduct from "../pages/products/AddProduct.jsx";
import Cart from "../pages/cart/Cart.jsx";
import OrderHistory from "../pages/orders/OrderHistory.jsx";
import FarmerOrders from "../pages/farmer/FarmerOrders.jsx";
import FarmerProducts from "../pages/farmer/FarmerProduct.jsx";
import About from "../pages/AboutUs.jsx";
FarmerOrders

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home_Page />
          </Layout>
        }
      />

      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />

      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />

      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      />

      <Route
        path="/farmer/dashboard"
        element={
          <Layout>
            <FarmerDashboard />
          </Layout>
        }
      />

      <Route
        path="/consumer/dashboard"
        element={
          <Layout>
            <ConsumerDashboard />
          </Layout>
        }
      />

      <Route
        path="/seller/dashboard"
        element={
          <Layout>
            <SellerDashboard />
          </Layout>
        }
      />

      <Route
        path="/delivery/dashboard"
        element={
          <Layout>
            <DeliveryDashboard />
          </Layout>
        }
      />
      
<Route path="/products" element={<Layout><ProductList /></Layout>} />
<Route path="/farmer/add-product" element={<Layout><AddProduct /></Layout>} />
<Route path="/cart" element={<Layout><Cart /></Layout>} />

<Route path="/orders" element={
  <Layout>

    <OrderHistory/>
  </Layout> 
  
  }></Route>

  <Route path="/farmer/orders" element={
    <Layout>

      <FarmerOrders />
    </Layout>
    } />

<Route path="/farmer/products" element={<Layout>

  <FarmerProducts/>
</Layout>}>

</Route>
<Route path="/about" element={<Layout>

  <About/>
</Layout>}>

</Route>

    </Routes>
  );
};

export default AppRoutes;