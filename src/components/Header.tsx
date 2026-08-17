import { useState } from "react";
import { X, ShoppingCart, Heart, Search, User, ChevronDown } from "lucide-react";
import { useAppSelector } from "../app/hooks";
import { selectCartItemCount } from "../features/cart/cartSelectors";
import { CartDropdown } from "../features/cart/CartDropdown";
import "./Header.css";

function HamburgerIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="14" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function Header() {
  const cartCount = useAppSelector(selectCartItemCount);
  const wishlistCount = 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="header">
      <span className="header__logo">Bandage</span>

      <button
        className="header__menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X size={22} /> : <HamburgerIcon size={22} />}
      </button>

      <nav className={`header__nav header__nav--desktop ${isMenuOpen ? "header__nav--open" : ""}`}>
        <a href="/" className="header__link">Home</a>
        <a href="/" className="header__link">
          Shop <ChevronDown size={14} className="header__arrow" />
        </a>
        <a href="/" className="header__link">About</a>
        <a href="/" className="header__link">Blog</a>
        <a href="/" className="header__link">Contact</a>
        <a href="/" className="header__link">Pages</a>
      </nav>

      <nav className={`header__nav header__nav--mobile ${isMenuOpen ? "header__nav--open" : ""}`}>
        <a href="/" className="header__link">Home</a>
        <a href="/" className="header__link">Product</a>
        <a href="/" className="header__link">Pricing</a>
        <a href="/" className="header__link">Contact</a>
      </nav>

      <div className="header__actions">
        <a href="/login" className="header__login">
          <User size={16} className="header__login-icon" />
          <span className="header__login-text">Login / Register</span>
        </a>

        <button className="header__icon-btn" aria-label="Search">
          <Search size={18} />
        </button>

        <div style={{ position: "relative" }}>
          <button
            className="header__icon-btn"
            aria-label="Cart"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <ShoppingCart size={18} />
            <span className="header__badge">{cartCount}</span>
          </button>
          {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
        </div>

        <button className="header__icon-btn header__icon-btn--wishlist" aria-label="Wishlist">
          <Heart size={18} />
          <span className="header__badge">{wishlistCount}</span>
        </button>
      </div>
    </header>
  );
}