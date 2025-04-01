import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Carts = () => {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-list">
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => removeFromCart(item._id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;
