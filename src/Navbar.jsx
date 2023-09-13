import "./Navbar.css";

import LightLogo from "./assets/images/logo-light.svg";
import DarkLogo from "./assets/images/logo-dark.svg";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <img src={LightLogo}></img>
          </li>
          <li>
            <button className="btn-secondary">Apply for access</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
