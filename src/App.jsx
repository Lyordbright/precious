import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollReveal from './components/ScrollReveal';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <div className={loading ? 'app-content loading' : 'app-content'}>
        <Navbar />

        <main>
          <Hero />

          <ScrollReveal><About /></ScrollReveal>
          <ScrollReveal><Skills /></ScrollReveal>
          <ScrollReveal><Tools /></ScrollReveal>
          <ScrollReveal><Experience /></ScrollReveal>
          <ScrollReveal><Highlights /></ScrollReveal>
          <ScrollReveal><Contact /></ScrollReveal>
        </main>

        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                precious<span>.</span>
              </a>
              <p>
                Making every customer interaction count.
                Thoughtful support, meaningful connections.
              </p>
            </div>

            <div className="footer-links">
              <span className="footer-heading">EXPLORE</span>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#tools">Tools</a>
            </div>

            <div className="footer-connect">
              <span className="footer-heading">GET IN TOUCH</span>
              <a href="mailto:basseyprecious1914@gmail.com">
                Email Precious <ArrowUpRight size={15} />
              </a>
              <span>Based in Nigeria</span>
              <span>Open to opportunities</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Precious Bassey. All rights reserved.
            </span>
            <span>Designed with purpose. Built around people.</span>
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {showBackToTop && !loading && (
          <motion.button
            className="back-to-top"
            onClick={backToTop}
            aria-label="Back to top"
            title="Back to top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;