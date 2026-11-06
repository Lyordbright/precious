
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Headset,
  MessageCircle,
  Star,
  CheckCircle2,
  Phone,
  Sparkles,
  Heart,
} from 'lucide-react';

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
        className="hero-visual support-visual"
        initial={{ opacity: 0, scale: 0.9, x: 25 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="visual-glow" />

        {/* Main support dashboard */}
        <motion.div
          className="support-dashboard"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="dashboard-header">
            <div className="dashboard-brand">
              <span className="dashboard-brand-icon">
                <Headset size={19} />
              </span>
              <div>
                <strong>Support Desk</strong>
                <small>Customer care workspace</small>
              </div>
            </div>

            <span className="dashboard-status">
              <i /> Online
            </span>
          </div>

          <div className="dashboard-divider" />

          <div className="conversation-heading">
            <div>
              <small>ACTIVE CONVERSATION</small>
              <h3>Customer interaction</h3>
            </div>
            <span className="conversation-number">#0248</span>
          </div>

          <div className="chat-message customer-message">
            <span className="chat-avatar customer-avatar">C</span>
            <div>
              <small>Customer · 10:42 AM</small>
              <p>I'm having trouble completing my registration.</p>
            </div>
          </div>

          <div className="chat-message agent-message">
            <span className="chat-avatar agent-avatar">P</span>
            <div>
              <small>Precious · 10:43 AM</small>
              <p>
                I'd be happy to help. Let's work through it together.
              </p>
            </div>
          </div>

          <div className="dashboard-divider" />

          <div className="resolution-row">
            <span className="resolution-icon">
              <CheckCircle2 size={19} />
            </span>
            <div>
              <strong>Issue resolved</strong>
              <small>Customer successfully assisted</small>
            </div>
            <span className="resolution-check">
              <CheckCircle2 size={17} />
            </span>
          </div>

          <div className="satisfaction-row">
            <div>
              <small>CUSTOMER SATISFACTION</small>
              <strong>Excellent experience</strong>
            </div>
            <div className="satisfaction-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={13} fill="currentColor" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="floating-support-card response-card"
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <span className="floating-card-icon">
            <MessageCircle size={18} />
          </span>
          <div>
            <strong>Quick response</strong>
            <small>Every voice matters.</small>
          </div>
        </motion.div>

        <motion.div
          className="floating-support-card care-card"
          animate={{ y: [0, 9, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
        >
          <span className="floating-card-icon coral-icon">
            <Heart size={18} />
          </span>
          <div>
            <strong>People first</strong>
            <small>Care in every conversation.</small>
          </div>
        </motion.div>

        <motion.div
          className="floating-sparkle"
          animate={{ rotate: 360, scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles size={25} />
        </motion.div>

        <div className="visual-caption">
          <span>01 / 06</span>
          <span>People first. Always.</span>
        </div>
      </motion.div>
    </section>
  );
}
