import React from 'react';
import './Footer.css';
import { Mail, AtSign, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer ref={ref} className={`footer container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} id="contact">
      <div className="footer-top">
        <div className="footer-cta">
          <div className="section-label">
            LET'S CONNECT <span className="line"></span>
          </div>
          <h2 className="footer-title">
            Ready to build<br/>
            <i>something great?</i>
          </h2>
          <p className="footer-desc">Looking for a Frontend Developer internship or entry-level role — let's talk.</p>
          <a href="mailto:honeysuthar0805@gmail.com" className="btn-primary">LET'S WORK TOGETHER →</a>
        </div>
        
        <div className="footer-contact">
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>honeysuthar0805@gmail.com</span>
          </div>
          <div className="contact-item">
            <AtSign size={18} className="contact-icon" />
            <span>GitHub / LinkedIn</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="logo-small">
          HONEY
          <span>SUTHAR</span>
        </div>
        <div className="footer-copyright">
          © 2026 Honey Suthar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
