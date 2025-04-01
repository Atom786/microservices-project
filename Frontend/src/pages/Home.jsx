import React, { useState, useEffect } from "react";
import { getProducts, getOrders } from "../api/api";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
    getOrders().then((res) => setOrders(res.data));
  }, []);

  return (<>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Microservices Shop</h1>
      <p>Buy and manage your orders seamlessly!</p>
    </div>
    <div style= {{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "stretch"}}>
      <div>
      <h3>Manage Products</h3>
      {products?.map((product) => (
        <div key={product._id}>
            <h4>{product.name}</h4>
            <button>Edit</button>
            <button>Delete</button>
        </div>))}
      </div>
      <div>
        <h3>Manage Orders</h3>
        {orders?.map((order) => (
        <div key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Status: {order.status}</p>
        </div>
      ))}
      </div>
    </div>
    </>
  );
};

export default Home;
