import React, { useState,useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/Login.css";

const Login = () => {
  const { v_login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login({email,password}).then((response)=>{
        const { token, role } = response.data;
        v_login(token, role); 
        if (role === "Admin") { navigate("/admin"); } else {navigate("/products"); }
      });
      
      // alert(`Logging in with Email: ${email}, Password: ${password}`);
      
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };
  return (
    <>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
    </>
  );
};

export default Login;
