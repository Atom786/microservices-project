import React, { useEffect, useState } from "react";
import { getProducts, addProduct,updateProduct,deleteProduct } from "../api/api";
import "../styles/Admin.css";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  };

  // Add new product
  const v_addProduct = () => {
    if (!productName || !productPrice) {
      alert("Please enter product details");
      return;
    }

    const newProduct = { name: productName, price: parseFloat(productPrice) };
    addProduct(newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setProductName("");
        setProductPrice("");
      })
      .catch(error => console.error("Error adding product:", error));
  };

  // Delete a product
  const v_deleteProduct = (id) => {
    deleteProduct(id)
      .then(() => {
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(error => console.error("Error deleting product:", error));
  };

  // Edit a product
  const v_editProduct = (product) => {
    setEditingProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
  };

  // Update product
  const v_updateProduct = () => {
    if (!productName || !productPrice) {
      alert("Please enter product details");
      return;
    }
    updateProduct(editingProduct.id,
      {
      name: productName,
      price: parseFloat(productPrice),
    }).then(() => {
      setProducts(products.map(product =>
        product.id === editingProduct.id ? { ...product, name: productName, price: productPrice } : product
      ));
      setEditingProduct(null);
      setProductName("");
      setProductPrice("");
    }).catch(error => console.error("Error updating product:", error));
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>

      {/* Add or Edit Product Form */}
      <div className="add-product">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        {editingProduct ? (
          <button onClick={v_updateProduct}>Update Product</button>
        ) : (
          <button onClick={v_addProduct}>Add Product</button>
        )}
      </div>

      {/* Product List with Actions */}
      <h3>Existing Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button className="edit-btn" onClick={() => v_editProduct(product)}>Edit</button>
            <button className="delete-btn" onClick={() => v_deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
