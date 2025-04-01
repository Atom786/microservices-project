import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getOrders, placeOrder } from "../api/api";
import "../styles/Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState("");
  const { user } = useContext(AuthContext);
  useEffect(() => {
    getOrders(user)
      .then(response => {
        console.log(response.data)
        setOrders(response.data);
      })
      .catch(error => console.error("Error fetching orders:", error));
  }, [user]);

  const submitOrder = () => {
    if (!orderDetails) {
      alert("Enter order details");
      return;
    }

    placeOrder({ details: orderDetails })
      .then(() => {
        alert("Order placed successfully");
        setOrderDetails("");
        getOrders().then(response => setOrders(response.data));
      })
      .catch(error => console.error("Error placing order:", error));
  };

  return (
    <div className="orders-container">
      <h2>Orders</h2>

      {/* <div className="place-order">
        <input
          type="text"
          placeholder="Enter order details"
          value={orderDetails}
          onChange={(e) => setOrderDetails(e.target.value)}
        />
        <button onClick={submitOrder}>Place Order</button>
      </div> */}
      <h3>Order List</h3>
      <ul>
        {orders.map(order => (
          <li className='order-list-container' key={order._id}>
            <ul>
              {order.products.map(product => (
                <li key={product.productId}>{product.productId}</li>
              ))}
            </ul>
            Total Amount: {order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
