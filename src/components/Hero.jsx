import React from 'react';
import './Hero.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`hero container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="subtitle">I BUILD</span><br />
          <span className="title-large">Web Apps</span><br />
          <span className="subtitle-italic">THAT <i>PERFORM.</i></span>
        </h1>
        
        <div className="hero-tags">
          <span>REACT.JS</span> <span className="dot"></span> <span>NEXT.JS</span> <span className="dot"></span> <span>RESPONSIVE UI</span>
        </div>
        
        <a href="#work" className="btn-primary">VIEW WORK →</a>
      </div>
      
      <div className="hero-visual">
        <div className="hero-bg-circle"></div>
        <div className="hero-image-placeholder">
           <img src="https://res.cloudinary.com/bsptwaic/image/upload/v1785408580/1000084423-removebg-preview_kcrdgn.png" alt="Portrait" className="hero-portrait" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
