import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import CompanyDetails from "./components/CompanyDetails";
import './App.css'; 
import Companies from "./components/Companies";
import { useState } from "react";
import Registration from "./pages/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import AddCompany from "./pages/AddCompany";


export default function App() {
  const [search, setSearch] = useState("");
  return (
    <main className=" text-tertiary mx-auto">
      <BrowserRouter>
        <Header search={search} setSearch={setSearch}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/companyDetails" element={<CompanyDetails />} />
          <Route path="/comapnies" element={<Companies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/addCompany" element={<AddCompany />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
