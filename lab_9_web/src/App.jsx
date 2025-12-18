import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./components/ProductContext/ProductContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import CatalogPage from "./components/pages/CatalogPage";
import ItemPage from "./components/pages/ItemPage";

function App() {
  return (
    <ProductsProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/item/:id" element={<ItemPage />} />
          </Routes>
          <Footer />
        </div>
    </ProductsProvider>
  );
}

export default App;
