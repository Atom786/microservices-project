import React, { useState,useContext } from "react";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { placeOrder } from "../api/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user} = useContext(AuthContext);

    const handleOrder = async () => {
        if (!user) {
            alert("Please log in to place an order.");
            return;
        }
        setLoading(true);
        try {
           const response = await placeOrder({ cart },user);
              alert("Order placed successfully");
              navigate("/orders");
              clearCart();
        } catch (error) {
            console.error("Order failed:", error);
            alert("Order failed, please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <>
                    <h3>Order Summary</h3>
                    {cart.map((item) => (
                        <div key={item._id} className="order-item">
                            <h4>{item.name}</h4>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                    <button onClick={handleOrder} disabled={loading}>
                        {loading ? "Placing Order..." : "Place Order"}
                    </button>
                </>
            )}
        </div>
    );
};

export default Checkout;
