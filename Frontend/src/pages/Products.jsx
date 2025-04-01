import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../api/api";
import { useCart } from "../context/CartContext";
import "../styles/Product.css";

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); 
    navigate("/carts"); 
};
  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)} >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
