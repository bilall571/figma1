import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="shapka">
      <div className="logo-text">Appy</div>
      <div className="menyu-ssylki">
        <span>Product</span>
        <span>Features</span>
        <span>Use Cases</span>
        <span>Pricing</span>
      </div>
      <div className="pravaya-chast">
        <span className="login-link">Login</span>
        <button className="knopka-blue">Get Started</button>
      </div>
    </div>
  );
}
export default Header;