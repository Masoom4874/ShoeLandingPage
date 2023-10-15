import "./App.css";
import Navbar from "./components/navbar";
import FeaturePage from "./pages/FeaturePage";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

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
        <FeaturePage />
      </div>
    </div>
  );
}

export default App;
