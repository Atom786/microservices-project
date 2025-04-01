
import axios from "axios";
const API_BASE_URL = "http://localhost:4000/api";

export const getProducts = async () => {
  return axios.get(`${API_BASE_URL}/products`);
};

export const addProduct = async (product) => {
  return axios.post(`${API_BASE_URL}/products`, product);
};

export const updateProduct = async (id, product) => {
  return axios.put(`${API_BASE_URL}/products/${id}`, product);
};

export const deleteProduct = async (id) => {
  return axios.delete(`${API_BASE_URL}/products/${id}`);
};

export const getOrders = async (token) => {
  return axios.get(`${API_BASE_URL}/orders`,{
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const placeOrder = async (order,token) => {
  return axios.post(`${API_BASE_URL}/orders`, order,{
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// import axios from "axios";

// const API_BASE_URL = "http://localhost:4000"; // Update with your backend URL

// 🔹 Login API
export const login = async (credentials) => {
  return axios.post(`${API_BASE_URL}/users/login`, credentials);
};

export const register = async (credentials) =>{
  await axios.post(`${API_BASE_URL}/users/register`,credentials);
}
