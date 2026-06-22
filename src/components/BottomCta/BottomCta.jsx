import React from 'react';
import './BottomCta.css';
import Phone4 from "../../assets/Group 48.png";
function BottomCta() {
  return (
    <div className="pre-footer-cta">
      <div className="bottom-left-side">
        <h2 className="cta-title">Start now and get the best services</h2>
        <p className="cta-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        <button className="knopka-blue cta-btn">Get Started</button>
      </div>
      <div className="bottom-right-side">
        <div className="cta-phone-mockup">
          <img src={Phone4} alt="" />
        </div>
      </div>
    </div>
  );
}
export default BottomCta;