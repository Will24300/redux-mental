import { useState } from "react";
import { products } from "./data";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.items);
  const [cartOpen, setCartOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="app">
      <Header
        totalItems={totalItems}
        onCartClick={() => setCartOpen(!cartOpen)}
      />

      <main className="main">
        <div className="page-header">
          <h2>Products</h2>
          <p className="product-count">{products.length} items</p>
        </div>
        <ProductGrid products={products} />
      </main>

      {cartOpen && (
        <Cart
          products={products}
          totalPrice={totalPrice}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
