import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            className="add-btn"
            onClick={() => dispatch(addToCart(product.id))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
