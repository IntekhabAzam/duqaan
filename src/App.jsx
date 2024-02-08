import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import Inventory from "./components/Inventory";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
