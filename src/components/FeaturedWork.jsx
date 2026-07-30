import React from 'react';
import './FeaturedWork.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    title: 'MOVIE DISCOVERY APP',
    category: 'React.js, TMDB API',
    image: 'linear-gradient(45deg, #1a0a0b, #4a151b)',
    link: 'https://honey-framework-training-movie-app.netlify.app',
    screenshot: 'https://image.thum.io/get/width/600/crop/800/https://honey-framework-training-movie-app.netlify.app',
    video: 'https://res.cloudinary.com/bsptwaic/video/upload/v1785404408/Screen_Recording_2026-07-30_150906_axszgm.mp4'
  },
  {
    id: 2,
    title: 'WEATHER FORECAST APP',
    category: 'React.js, OpenWeather API',
    image: 'linear-gradient(45deg, #e5c5b5, #ffffff)',
    link: 'https://honeysuthar.github.io/weather-app/',
    screenshot: 'https://image.thum.io/get/width/600/crop/800/https://honeysuthar.github.io/weather-app/',
    video: 'https://res.cloudinary.com/bsptwaic/video/upload/v1785404516/Screen_Recording_2026-07-30_151034_gx2nar.mp4'
  },
  {
    id: 3,
    title: 'JJK HAND SEAL FX',
    category: 'Python, OpenCV, MediaPipe',
    image: 'linear-gradient(45deg, #2d1112, #6b222a)',
    link: 'https://github.com/honeysuthar/jjk_fx_app',
    screenshot: 'https://image.thum.io/get/width/600/crop/800/https://github.com/honeysuthar/jjk_fx_app',
    video: 'https://res.cloudinary.com/bsptwaic/video/upload/v1785405110/Screen_Recording_2026-07-18_123930_tlc6mc.mp4'
  },
  {
    id: 4,
    title: 'IPHONE CALCULATOR',
    category: 'HTML, CSS, JavaScript',
    image: 'linear-gradient(45deg, #d4a395, #f2e3de)',
    link: 'https://honeysuthar.github.io/iphonecalc/',
    screenshot: 'https://image.thum.io/get/width/600/crop/800/https://honeysuthar.github.io/iphonecalc/',
    video: 'https://res.cloudinary.com/bsptwaic/video/upload/v1785404592/Screen_Recording_2026-07-30_151245_g1tno5.mp4'
  },
  {
    id: 5,
    title: 'I LOVE YOU HEART',
    category: 'HTML, CSS, JavaScript',
    image: 'linear-gradient(45deg, #e5989b, #b56576)',
    link: 'https://honeysuthar.github.io/loveheart/',
    screenshot: 'https://image.thum.io/get/width/600/crop/800/https://honeysuthar.github.io/loveheart/',
    video: 'https://res.cloudinary.com/bsptwaic/video/upload/v1785403944/Screen_Recording_2026-07-30_150122_nkuqjl.mp4'
  }
];

const FeaturedWork = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`featured-work container reveal-hidden ${isVisible ? 'reveal-visible' : ''}`} id="work">
      <div className="section-header">
        <div className="section-label">
          FEATURED WORK <span className="line"></span>
        </div>
        <a href="https://github.com/honeysuthar" target="_blank" rel="noopener noreferrer" className="btn-outline-small">VIEW ALL PROJECTS →</a>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card" key={project.id} style={{ textDecoration: 'none' }}>
            <div className="project-image-wrapper">
              <div className="flip-inner">
                <div className="card-front" style={{ background: project.image }}>
                  <div className="card-front-title">{project.title}</div>
                </div>
                <div className="card-back" style={project.screenshot && !project.video ? { backgroundImage: `url(${project.screenshot})` } : {}}>
                  {project.video && (
                    <video 
                      src={project.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        backgroundColor: '#000',
                        zIndex: 0
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
