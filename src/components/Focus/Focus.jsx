import React from 'react';
import './Focus.css';
import PhoneThere from "../../assets/Col.png";

function Focus() {
  return (
    <div className="focus-blok">
      <div className="focus-header">
        <h2 className="focus-section-title">Focus on what matters</h2>
        <p className="focus-section-subtitle">
          Eget at purus mauris euismod metus vitae eget. Diam massa venenatis pellentesque facilisis nunc, varius.
        </p>
      </div>

     
      <div className="focus-content">
        <div className="focus-left">
          <div className="focus-phone-mockup">
            <img src={PhoneThere} alt="Focus App Screen" />
          </div>
        </div>
        
        <div className="focus-right">
          <div className="focus-item focus-item-active">
            <div className="focus-line focus-line-blue"></div>
            <div className="focus-item-text">
              <h3>Bibendum gravida dolor egestas aliquam</h3>
              <p>
                Egestas tincidunt hendrerit nibh platea sit vivamus aenean rhoncus etiam. 
                Tristique amet, sed ac ac dolor habitant. Mauris duis neque molestie 
                venenatis nibh hendrerit pharetra. Tortor suscipit leo sit tellus ac 
                scelerisque gravida sem.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <div className="focus-line focus-line-gray"></div>
            <div className="focus-item-text">
              <h3>Egestas lorem eget</h3>
            </div>
          </div>

          <div className="focus-item">
            <div className="focus-line focus-line-gray"></div>
            <div className="focus-item-text">
              <h3>Tellus eget feugiat sit</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Большая синяя кнопка снизу */}
      <div className="focus-bottom-action">
        <button className="focus-btn-primary">Get Started</button>
      </div>
    </div>
  );
}

export default Focus;