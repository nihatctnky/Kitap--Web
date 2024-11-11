import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";

const App = () => {
  // React-router-dom özellikleri kullanmamızı saglar
  return (
    <BrowserRouter>
      <div className="page">
        {/* {Bütün sayfaların ortak kullandıgı bileşen} */}
        <Header />

        {/* { url yola elementi ekrana basar}  */}
        <Routes>
          {/* {projedeki sayfa için route tanımlarız} */}
          <Route path="/" element={<Home />} />

          <Route path="/ürünler" element={<Products />} />
          {/* Dynamic route> path params>: */}
          <Route path="/detay/:id" element={< Detail />} />

          <Route path="/kategori" element={<Category />} >
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route >

          {/* Undefined route */}

          <Route path="*" element={<Undefined />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;