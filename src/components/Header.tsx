import { useState } from "react";
import { Menu, X, ShoppingCart, Heart, Search, User, ChevronDown } from "lucide-react";
import { useAppSelector } from "../app/hooks";
import { selectCartItemCount } from "../features/cart/cartSelectors";
import "./Header.css";

export function Header() {
  const cartCount = useAppSelector(selectCartItemCount);
  const wishlistCount = 0;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <span className="header__logo">Bandage</span>

      <button
        className="header__menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <a href="/" className="header__link">Home</a>
        <a href="/" className="header__link">
          Shop <ChevronDown size={14} className="header__arrow" />
        </a>
        <a href="/" className="header__link">About</a>
        <a href="/" className="header__link">Blog</a>
        <a href="/" className="header__link">Contact</a>
        <a href="/" className="header__link">Pages</a>
      </nav>

      <div className="header__actions">
        <a href="/login" className="header__login">
          <User size={16} className="header__login-icon" />
          <span className="header__login-text">Login / Register</span>
        </a>

        <button className="header__icon-btn" aria-label="Search">
          <Search size={18} />
        </button>

        <button className="header__icon-btn" aria-label="Cart">
          <ShoppingCart size={18} />
          <span className="header__badge">{cartCount}</span>
        </button>

        <button className="header__icon-btn" aria-label="Wishlist">
          <Heart size={18} />
          <span className="header__badge">{wishlistCount}</span>
        </button>
      </div>
    </header>
  );
}