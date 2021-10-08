import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import ShoppingList from "./Components/ShoppingList";
import  logo1  from "./assets/logo1.png";
import Footer from "./Components/Footer";
import "./Styles/Layout.css";
function App() {
  return (
    <div>
      <Banner>
        <img src={logo1} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
