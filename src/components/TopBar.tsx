import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./TopBar.css";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__contact">
        <a href="tel:+12255550118" className="topbar__contact-item">
          <Phone size={13} className="topbar__icon" />
          (225) 555-0118
        </a>
        <a href="mailto:michelle.rivera@example.com" className="topbar__contact-item topbar__contact-item--email">
          <Mail size={13} className="topbar__icon" />
          michelle.rivera@example.com
        </a>
      </div>

      <div className="topbar__promo">
        Follow Us and get a chance to win <strong>80% off</strong>
      </div>

      <div className="topbar__social">
        <span className="topbar__follow-label">Follow Us :</span>
        <a href="#" aria-label="Instagram" className="topbar__social-icon">
          <FaInstagram size={14} />
        </a>
        <a href="#" aria-label="YouTube" className="topbar__social-icon">
          <FaYoutube size={14} />
        </a>
        <a href="#" aria-label="Facebook" className="topbar__social-icon">
          <FaFacebookF size={14} />
        </a>
        <a href="#" aria-label="Twitter" className="topbar__social-icon">
          <FaTwitter size={14} />
        </a>
      </div>
    </div>
  );
}