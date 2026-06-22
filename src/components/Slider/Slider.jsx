import React from 'react';
import './Slider.css';
import Woomen from "../../assets/Col (3).png";
function Slider() {
  return (
    <div className="slider-section">
      <div className="nav-arrow left-arrow">←</div>
      
      <div className="slider-content">
        <div className="slider-woman-container">
          <img src= {Woomen} alt="" />
        </div>
        
        <div className="slider-text-box">
          <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p className="person-name">Alex R.</p>
        </div>
      </div>
      
      <div className="nav-arrow right-arrow">→</div>
      
      <div className="slider-dots">
        <div className="dot dot-active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
export default Slider;