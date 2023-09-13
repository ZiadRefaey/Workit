import "./Intro.css";

import Louis from "./assets/images/image-founder.webp";
import BgPattern3 from "./assets/images/bg-pattern-3.svg";
export default function Intro() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-img">
          <img src={Louis} alt="person img" />
        </div>
        <div className="intro-content">
          <h2 className=" heading-m intro-title">Be the first to test</h2>
          <div className="intro-desc">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </div>
          <button className="btn-primary intro-btn">Apply for access</button>
          <img
            src={BgPattern3}
            alt="background pattern"
            className="intro-pattern"
          />
        </div>
      </div>
    </>
  );
}
