import { useState } from "react";
import type { Product } from "./productsApi";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../cart/cartSlice";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onAdded: (product: Product) => void;
}

export function ProductCard({ product, onAdded }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const isOutOfStock = product.stock === 0;
  const hasDiscount = product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  const handleAddToBasket = () => {
    if (isOutOfStock) return;
    dispatch(addToCart(product));
    onAdded(product);
  };

  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
  };

  return (
    <div
      className={`product-card ${isOutOfStock ? "product-card--out-of-stock" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.thumbnail}
          alt={product.title}
        />
        {isOutOfStock && (
          <span className="product-card__badge product-card__badge--stock">
            Out of stock
          </span>
        )}
        {hasDiscount && !isOutOfStock && (
          <span className="product-card__badge product-card__badge--discount">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}
      </div>

      <p className="product-card__title">{product.title}</p>

      <div className="product-card__price-row">
        {hasDiscount ? (
          <>
            <span className="product-card__price product-card__price--old">
              ${product.price.toFixed(2)}
            </span>
            <span className="product-card__price product-card__price--new">
              ${discountedPrice.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="product-card__price">${product.price.toFixed(2)}</span>
        )}
      </div>

      <p className="product-card__rating">
        {renderStars(product.rating)} {product.rating.toFixed(1)}
      </p>

      {!isOutOfStock && (
        <button
          className={`product-card__add-btn ${isHovered ? "is-visible" : ""}`}
          onClick={handleAddToBasket}
        >
          Add to Basket
        </button>
      )}
    </div>
  );
}