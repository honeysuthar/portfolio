import React from 'react';
import './CaseStudies.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CaseStudies = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`case-studies container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <div className="section-header">
        <div className="section-label">
          CURRENTLY BUILDING <span className="line"></span>
        </div>
        <a href="https://github.com/honeysuthar" target="_blank" rel="noopener noreferrer" className="btn-outline-small">VIEW ON GITHUB →</a>
      </div>
      
      <div className="studies-grid">
        <div className="study-card study-bookify">
          <div className="study-content full-width">
            <div className="study-badge">ONGOING</div>
            <h3 className="study-title">BOOKIFY</h3>
            <h4 className="study-tagline">A reading habit app that turns your library into an evolving reading identity.</h4>
            <p className="study-desc">Most reading trackers just log what you've read. Bookify tracks who you're becoming as a reader — streaks, XP, and a personality engine built from your genre DNA. Currently building the core reading-session loop and dashboard.</p>
            <div className="study-tags">Next.js · TypeScript · Prisma · Tailwind CSS</div>
            <a href="https://github.com/honeysuthar" target="_blank" rel="noopener noreferrer" className="study-link btn-repo">VIEW REPO →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
