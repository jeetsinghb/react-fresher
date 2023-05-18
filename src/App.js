import React from "react";
import "./styles/style.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactDetails from "./Components/ContactDetails";
import Contact from "./pages/Contact";
import JsonData from "./pages/JsonData";
import Products from "./pages/Products";
import ProductSingle from "./pages/ProductSingle";
import Quotes from "./pages/Quotes";
import Counter from "./pages/Counter";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-details" element={<ContactDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/json-data" element={<JsonData />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductSingle />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
