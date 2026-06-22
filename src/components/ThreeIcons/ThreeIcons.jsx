import React from 'react';
import './ThreeIcons.css';

function ThreeIcons() {
  return (
    <div className="tri-bloka-wrap">
      <div className="odin-blok">
        <div className="kruglaya-ikona red-bg">📦</div>
        <h3>Feature one</h3>
        <p>Short description text goes here.</p>
      </div>
      <div className="odin-blok">
        <div className="kruglaya-ikona yellow-bg">⚡</div>
        <h3>Feature two</h3>
        <p>Short description text goes here.</p>
      </div>
      <div className="odin-blok">
        <div className="kruglaya-ikona blue-bg">🛡️</div>
        <h3>Feature three</h3>
        <p>Short description text goes here.</p>
      </div>
    </div>
  );
}
export default ThreeIcons;