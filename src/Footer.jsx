import { useState } from "react";
import "./Footer.css";

// import fb from "./assets/images/icon-facebook.jsx";
import Facebook from "./assets/images/Facebook";
import Instagram from "./assets/images/Instagram";
import Twitter from "./assets/images/Twitter";
import ig from "./assets/images/icon-instagram.svg";
import tw from "./assets/images/icon-twitter.svg";
import logo from "./assets/images/logo-dark.svg";
export default function Footer() {
  const [facebookActive, setFacebookActive] = useState(false);
  const [instagramActive, setInstagramActive] = useState(false);
  const [twitterActive, setTwitterActive] = useState(false);

  function handleFacebookMouseEnter() {
    setFacebookActive(true);
  }

  function handleFacebookMouseLeave() {
    setFacebookActive(false);
  }

  function handleInstagramMouseEnter() {
    setInstagramActive(true);
  }

  function handleInstagramMouseLeave() {
    setInstagramActive(false);
  }

  function handleTwitterMouseEnter() {
    setTwitterActive(true);
  }

  function handleTwitterMouseLeave() {
    setTwitterActive(false);
  }
  return (
    <>
      <div className="footer-container">
        <img src={logo} alt="dark logo" className="footer-logo" />
        <div className="socials">
          <div
            onMouseEnter={handleFacebookMouseEnter}
            onMouseLeave={handleFacebookMouseLeave}
          >
            {facebookActive ? <Facebook color="var(--Purple)" /> : <Facebook />}
          </div>
          <div
            onMouseEnter={handleInstagramMouseEnter}
            onMouseLeave={handleInstagramMouseLeave}
          >
            {instagramActive ? (
              <Instagram color="var(--Purple)" />
            ) : (
              <Instagram />
            )}
          </div>
          <div
            onMouseEnter={handleTwitterMouseEnter}
            onMouseLeave={handleTwitterMouseLeave}
          >
            {twitterActive ? <Twitter color="var(--Purple)" /> : <Twitter />}
          </div>
        </div>
      </div>
    </>
  );
}
