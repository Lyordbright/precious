import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero section-container" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="availability">
          <span className="status-dot" />
          CUSTOMER SERVICE PROFESSIONAL · NIGERIA
        </div>

        <h1>
          Turning difficult conversations into
          <span> loyal customers.</span>
        </h1>

        <p className="hero-description">
          I'm Precious Bassey. I turn customer concerns into positive
          experiences through active listening, thoughtful solutions,
          and consistent follow-ups.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="primary-btn">
            Let's work together <ArrowUpRight size={18} />
          </a>

          <a href="#about" className="secondary-btn">
            Discover my story <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero-stats">
          <div><strong>3+</strong><span>Years experience</span></div>
          <div><strong>9</strong><span>Tools mastered</span></div>
          <div><strong>2</strong><span>Work environments</span></div>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual hero-portrait-visual"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
      >
        <img
          className="hero-portrait"
          src="/images/precious.jpg.jpeg"
          alt="Precious Bassey, Customer Service Representative"
          fetchPriority="high"
        />
      </motion.div>
    </section>
  );
}
