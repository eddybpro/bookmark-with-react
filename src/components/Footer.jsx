import "./Footer.css";
import { Logo } from "../assets";
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="bookmark">
        <img src={Logo} alt="" />
      </a>
      <ul className="FooterLinks">
        <li className="FooterLinks-Link">
          <a href="#">features</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">pricing</a>
        </li>
        <li className="FooterLinks-Link">
          <a href="#">contact</a>
        </li>
      </ul>
      <ul className="SocialIcons">
        <li>
          <a href="#" aria-label="facebook">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaFacebookSquare />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="#" aria-label="twitter">
            <IconContext.Provider value={{ className: "socialIcon" }}>
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
