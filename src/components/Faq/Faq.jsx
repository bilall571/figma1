import React from 'react';
import './Faq.css';

function Faq() {
  return (
    <div className="voprosy-otvety">
      <h2>Answers to your questions</h2>
      <div className="vopros-blok">
        <div className="vopros-text">What is the meaning of life? <span className="ptichka">⌄</span></div>
      </div>
      <div className="vopros-blok">
        <div className="vopros-text">How do I reset my password? <span className="ptichka">⌄</span></div>
      </div>
      <div className="vopros-blok">
        <div className="vopros-text">Can I cancel my subscription? <span className="ptichka">⌄</span></div>
      </div>
    </div>
  );
}
export default Faq;