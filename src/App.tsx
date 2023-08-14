import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserProfile from "./components/UserProfile/UserProfile";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/"  element={<HomePage />} /> */}
        <Route path="/" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="checkout" element={<CheckoutForm />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
