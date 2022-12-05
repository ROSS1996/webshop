import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Home";
import Products from "./Products";
import Detail from "./Detail";
import Chart from "./Chart";


const Index = () => {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/webshop/" element={<Home />} />
          <Route path="/webshop/products" element={<Products />} />
          <Route path="/webshop/products/:id" element={<Detail />} />
          <Route path="/webshop/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Index;
