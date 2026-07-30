import React from 'react';
import './Process.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'DISCOVER', desc: 'I break down requirements, APIs, and design specs before writing a line of code.' },
  { num: '02', title: 'STRUCTURE', desc: 'I plan component architecture and state management to avoid prop drilling.' },
  { num: '03', title: 'BUILD', desc: 'I develop responsive, pixel-accurate UI with clean, reusable components.' },
  { num: '04', title: 'REFINE', desc: 'I test edge cases, loading/error states, and polish interactions.' },
  { num: '05', title: 'SHIP', desc: 'I deploy, document, and hand off production-ready code.' }
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`process container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} id="process">
      <div className="section-label">
        MY DEV PROCESS <span className="line"></span>
      </div>
      
      <div className="process-timeline">
        {steps.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="step-num">{step.num}</div>
            <div className="step-content">
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
            {index < steps.length - 1 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
