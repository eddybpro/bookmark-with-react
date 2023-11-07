import "./Header.css";
import { HeroIllustration } from "../assets";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="HeaderWrapper">
        <div className="HeaderWrapper-ImgBox">
          <img src={HeroIllustration} alt="" />
        </div>
        <div className="HeaderWrapper-TxtBox">
          <h1 className="HeaderWrapper-TxtBox-Title">
            A Simple Bookmark Manager
          </h1>
          <p className="HeaderWrapper-TxtBox-Para">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="HeaderWrapper-TxtBox-BtnsBox">
            <button className="HeaderWrapper-TxtBox-BtnsBox-Chrome">
              Get it on Chrome
            </button>
            <button className="HeaderWrapper-TxtBox-BtnsBox-Firefox">
              Get it on Firefox
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
