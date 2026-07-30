import React from 'react';
import './About.css';
import { Sparkles, Flower2, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`about container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} id="about">
      <div className="about-content">
        <div className="section-label">
          ABOUT ME <span className="line"></span>
        </div>
        <h2 className="about-title">
          Code meets<br/>
          <i>craft.</i>
        </h2>
        <p className="about-description">
          I'm Honey, a frontend developer specializing in React — I turn design mockups into pixel-accurate, production-ready interfaces. During my internship at Dasinfomedia, I shipped real features for a live client product, translating visual specs into clean, responsive UI components. I care about the details where design and code meet: smooth interactions, thoughtful component architecture, and interfaces that feel as good as they look.
        </p>
        <a href="#about-more" className="btn-outline-small">MORE ABOUT ME →</a>
      </div>
      
      <div className="about-cards">
        <div className="card">
          <Sparkles className="card-icon" size={24} />
          <h3>6 Months</h3>
          <p className="card-subtitle">Internship Experience</p>
          <p className="card-text">Shipping real features in a live production codebase.</p>
        </div>
        <div className="card">
          <Flower2 className="card-icon" size={24} />
          <h3>3+ Projects</h3>
          <p className="card-subtitle">Built & Deployed</p>
          <p className="card-text">From movie apps to real-time computer vision tools.</p>
        </div>
        <div className="card">
          <MessageCircle className="card-icon" size={24} />
          <h3>React &<br/>Next.js</h3>
          <p className="card-subtitle">Core Stack</p>
          <p className="card-text">Turning designs into functional, responsive UI.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
