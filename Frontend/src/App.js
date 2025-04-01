import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/global.css";

const PrivateRoute = ({ children, roleRequired }) => {
  const { user, role } = React.useContext(AuthContext);
  return user && role === roleRequired ? children : <Navigate to="/login" />;
};
function App() {
  return (
    <AuthProvider>
      <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin" element={<PrivateRoute roleRequired="Admin"><Admin/></PrivateRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
