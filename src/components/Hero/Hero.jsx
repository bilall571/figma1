import React from 'react';
import './Hero.css';
import PhoneOne from "../../assets/Col.png";
function Hero() {
  return (
    <div className="glavniy-ekran">
      <div className="left-side">
        <h1 className="big-title">Building apps just<br/>got easier</h1>
        <p className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="knopki-ryadom">
          <button className="knopka-blue">Get Started</button>
          <span className="watch-video">▶ Watch Video</span>
        </div>
      </div>
      <div className="right-side">
        <div className="telefon-kartinka"><img src={PhoneOne} alt="" /></div> 
      </div>
    </div>
  );
}
export default Hero;