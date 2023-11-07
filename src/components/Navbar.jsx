import "./Navbar.css";
import { Logo, Close, Menu, Facebook, Twitter } from "../assets";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <a
        href="#"
        className={isMenuOpen ? "Logo filter" : "Logo"}
        aria-label="bookmark"
      >
        <img src={Logo} alt="" />
      </a>

      <div className="MenuBox">
        {isMenuOpen ? (
          <button
            aria-label="close"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Close} alt="" />
          </button>
        ) : (
          <button
            aria-label="menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <img src={Menu} alt="" />
          </button>
        )}
      </div>

      <div className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <ul>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              features
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              pricing
            </a>
          </li>
          <li className="NavLinks-Link">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              contact
            </a>
          </li>
          <li className="NavLinks-Link login">
            <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
              login
            </a>
          </li>
        </ul>
        <div className="NavSocialIconsBox mobile">
          <button aria-label="facebook">
            <img src={Facebook} alt="" />
          </button>
          <button aria-label="twitter">
            <img src={Twitter} alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
