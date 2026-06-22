import React from 'react';
import './Hero.css';
import PhoneOne from "../../assets/Col.png";
function Hero() {
  return (
    <div className="glavniy-ekran">
      <div className="left-side">
        <h1 className="big-title">gungan guli gulu t<br/>tutu</h1>
        <p className="small-text">
          bla bla bla bla bla bla bal bal bal bal bla blab laba lba bla
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
