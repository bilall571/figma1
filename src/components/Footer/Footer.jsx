import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="appy-footer">
      <div className="footer-grid">

        <div className="footer-column">
          <h4 className="column-title">Categories</h4>
          <ul className="column-links">
            <li><a href="#ui">User Interface</a></li>
            <li><a href="#ux">User Experience</a></li>
            <li><a href="#digital">Digital Media</a></li>
            <li><a href="#lifestyle">Lifestyle</a></li>
            <li><a href="#prog">Programming</a></li>
            <li><a href="#anim">Animation</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Product</h4>
          <ul className="column-links">
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#browse">Browse</a></li>
            <li><a href="#access">Accessibility</a></li>
            <li><a href="#five">Five</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Solutions</h4>
          <ul className="column-links">
            <li><a href="#brain">Brainstorming</a></li>
            <li><a href="#ideation">Ideation</a></li>
            <li><a href="#wireframing">Wireframing</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#design">Design</a></li>
            <li><a href="#concept">Concept</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Resources</h4>
          <ul className="column-links">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Support</h4>
          <ul className="column-links">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#webinar">Webinar</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="column-title">Company</h4>
          <ul className="column-links">
            <li><a href="#about">About</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#events-co">Events</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#partners">Partners</a></li>
          </ul>
        </div>

      </div>


      <hr className="footer-divider" />


      <div className="footer-bottom">
        <div className="footer-logo">Appy</div>

        <div className="footer-copyright">
          @ 2023 All rights reserved.
        </div>


      </div>
    </footer>
  );
}

export default Footer;