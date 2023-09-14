import "./Hero.css";
import Navbar from "./Navbar";
import bg_1 from "./assets/images/bg-1.svg";
import BgPattern1 from "./assets/images/bg-pattern-1.svg";
import BgPattern2 from "./assets/images/bg-pattern-2.svg";

import MobileIamge from "./assets/images/image-hero.webp";
export default function Hero() {
  return (
    <>
      <div className="hero">
        <Navbar />
        <h1 className="heading-l hero-header">
          Data <span className="heading-span heading-l">tailored</span> to
          <br /> your needs.
        </h1>
        <button className="btn-primary hero-btn">Learn more</button>

        <img src={MobileIamge} alt="hero img" className="hero-img" />
        <img src={BgPattern1} alt="BG Extension" className="pattern-1" />
        <img src={BgPattern2} alt="BG Extension" className="pattern-2" />
      </div>
      <img src={bg_1} alt="BG Extension" />
    </>
  );
}
