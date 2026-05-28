import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../data/constants";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Simplified footer based on Figma design */}
          <div className="footer-logo">
            <span className="logo-text">PrintHub</span>
          </div>
          
          <div className="footer-links">
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.LISTINGS}>Printers</Link>
            <Link to={ROUTES.ADD_LISTING}>Upload Design</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Contact</Link>
          </div>
          
          <div className="footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PrintHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
