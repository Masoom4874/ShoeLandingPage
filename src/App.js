import "./App.css";
import Navbar from "./components/navbar";
import ShopPage from "./pages/ShopPage";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <section id="home">
          <Homepage />
        </section>

        <section id="product">
          <ProductPage />
        </section>

        <section id="shop">
          <ShopPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </div>
  );
}

export default App;
