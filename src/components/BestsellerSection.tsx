import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../features/products/productsApi";
import type { Product } from "../features/products/productsApi";
import { ProductCard } from "../features/products/ProductCard";
import "./BestsellerSection.css";

export function BestsellerSection() {
  const { data, isLoading, isError } = useGetProductsQuery();
  const [lastAdded, setLastAdded] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    if (!lastAdded) return;
    const timer = setTimeout(() => setLastAdded(null), 3000);
    return () => clearTimeout(timer);
  }, [lastAdded]);

  if (isLoading) return <p className="bestseller-status">Loading products…</p>;
  if (isError) return <p className="bestseller-status">Something went wrong. Please try again.</p>;

  const products = data?.products.slice(0, visibleCount) ?? [];

  return (
    <section className="bestseller">
      <p className="bestseller__eyebrow">Featured Products</p>
      <h2 className="bestseller__heading">BESTSELLER PRODUCTS</h2>
      <p className="bestseller__subtitle">
        Problems trying to resolve the conflict between
      </p>

      {products.length === 0 ? (
        <p className="bestseller-status">No products available.</p>
      ) : (
        <div className="bestseller__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdded={setLastAdded} />
          ))}
        </div>
      )}

      {data && visibleCount < data.products.length && (
        <button
          className="bestseller__load-more"
          onClick={() => setVisibleCount((count) => count + 10)}
        >
          LOAD MORE PRODUCTS
        </button>
      )}

      {lastAdded && (
        <div className="cart-toast" role="status" aria-live="polite">
          <img
            src={lastAdded.thumbnail}
            alt={lastAdded.title}
            className="cart-toast__image"
          />
          <div className="cart-toast__body">
            <p className="cart-toast__label">Successfully added to basket</p>
            <p className="cart-toast__title">{lastAdded.title}</p>
            <p className="cart-toast__price">${lastAdded.price.toFixed(2)}</p>
          </div>
          <button
            className="cart-toast__close"
            aria-label="Dismiss notification"
            onClick={() => setLastAdded(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}