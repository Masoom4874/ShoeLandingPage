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
        <Homepage />
        <ProductPage />
        <ShopPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
