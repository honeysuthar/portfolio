import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Process />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
