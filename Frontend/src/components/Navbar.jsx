import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/global.css";

const Navbar = () => {
  const { user, role, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="logo">Microservices Shop</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/carts">Carts</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        {role === "Admin" && <li><Link to="/admin">Admin</Link></li>}
        {user ? (
                <li><button onClick={logout}>Logout</button></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
      </ul>
    </nav>
  );
};

export default Navbar;
