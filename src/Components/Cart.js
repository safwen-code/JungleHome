import "../Styles/Cart.css";
import { useState } from "react";

function Cart() {
  const monsteraPrice = 8;
  const [cart, setcart] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  function UpdateCart() {
    setcart(cart + 1);
    console.log("updatedCart");
  }
  function viderPanier() {
    setcart(0);
  }
  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setisOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€<button onClick={UpdateCart}>Ajouter</button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={viderPanier}>vider le panier</button>
    </div>
  ) : (
    <button onClick={() => setisOpen(true)}>Ouvrir le Panier</button>
  );
}

export default Cart;
