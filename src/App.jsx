import "./App.css";
import Header from "./xtra/Header";
import Items from "./slider/Items";
import ProductCard from "./ProductsCard/Products";
import ImageComponent from "./ProductsCard/ImageComponent";
import Electronics from "./xtra/Electronics";
import Footer from "./Footer";
import ImageSlider from "./slider/ImageSlider";

function App() {
  return (
    <>
      <div className="outer-div">
        <Header />
        <Items />
        <ProductCard />
        <ImageComponent />
        <Electronics />
        {/* <ImageSlider /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
