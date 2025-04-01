import React, { createContext, useEffect, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    // Add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]); 
        // setCart((prevCart) => {
        //     const existingItem = prevCart.find((item) => item._id === product._id);
        //     if (existingItem) {
        //         return prevCart.map((item) =>
        //             item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        //         );
        //     } else {
        //         return [...prevCart, { ...product, quantity: 1 }];
        //     }
        // });
    };


    // Remove item from cart
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    };

    // Clear the cart after order
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
