import "./Footer.css";

const footerColumns = [
  {
    title: "Company Info",
    links: ["About Us", "Career", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact"],
  },
  {
    title: "Features",
    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="footer__logo">Bandage</span>
        <div className="footer__socials">
          <a href="#" aria-label="Facebook">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 6H13V3H11C9.34 3 8 4.34 8 6V8H6V11H8V17H11V11H13L13.5 8H11V6.5C11 6.22 11.22 6 11.5 6H11Z" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.4" />
              <circle cx="13.5" cy="4.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17 3.5C16.4 3.8 15.7 4 15 4.1C15.7 3.7 16.3 3 16.5 2.2C15.9 2.6 15.2 2.9 14.4 3C13.8 2.4 12.9 2 12 2C10.2 2 8.7 3.5 8.7 5.3C8.7 5.6 8.7 5.8 8.8 6C6.1 5.9 3.7 4.6 2.1 2.6C1.8 3.1 1.7 3.7 1.7 4.3C1.7 5.5 2.3 6.5 3.2 7.1C2.6 7.1 2.1 6.9 1.7 6.7V6.7C1.7 8.2 2.8 9.5 4.2 9.8C3.9 9.9 3.6 9.9 3.3 9.9C3.1 9.9 2.9 9.9 2.7 9.8C3.1 11.1 4.3 12 5.7 12C4.6 12.9 3.2 13.4 1.7 13.4C1.4 13.4 1.2 13.4 1 13.3C2.4 14.2 4.1 14.8 5.9 14.8C12 14.8 15.3 9.7 15.3 5.3V4.9C15.9 4.4 16.5 3.9 17 3.5Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__columns">
        {footerColumns.map((column) => (
          <div key={column.title} className="footer__column">
            <h4 className="footer__column-title">{column.title}</h4>
            <ul className="footer__link-list">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__column footer__column--subscribe">
          <h4 className="footer__column-title">Get In Touch</h4>
          <form className="footer__subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="visually-hidden">Your Email</label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="footer__email-input"
              required
            />
            <button type="submit" className="footer__subscribe-btn">
              Subscribe
            </button>
          </form>
          <p className="footer__subscribe-note">Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Made With Love By Finland. All Rights Reserved.</p>
      </div>
    </footer>
  );
}