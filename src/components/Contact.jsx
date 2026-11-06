
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Phone,
  Copy,
  MapPin,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const email = 'basseyprecious1914@gmail.com';
const phone = '+2347080775058';

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert('Email address copied!');
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section className="contact contact-redesign section-container" id="contact">
      <motion.div
        className="contact-redesign-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-left">
          <div className="contact-eyebrow">
            <span />
            06 — LET'S CONNECT
          </div>

          <div className="contact-heading-wrap">
            <span className="contact-kicker">
              THE NEXT GREAT CONNECTION STARTS HERE.
            </span>

            <h2>
              Have a customer
              <span> experience </span>
              challenge?
              <br />
              Let's talk.
            </h2>

            <p>
              Great customer relationships don't happen by accident.
              They start with someone who listens, understands and takes
              action. I'd love to bring that approach to your team.
            </p>
          </div>

          <a href={`mailto:${email}`} className="contact-main-btn">
            Start a conversation
            <span><ArrowUpRight size={20} /></span>
          </a>

          <div className="contact-availability">
            <span className="contact-availability-dot" />
            Available for new opportunities
          </div>

          <div className="contact-decoration">
            <Sparkles size={90} strokeWidth={0.7} />
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-right-heading">
            <small>GET IN TOUCH</small>
            <h3>Let's make something happen.</h3>
          </div>

          <a href={`mailto:${email}`} className="contact-method">
            <span className="contact-method-icon">
              <Mail size={21} />
            </span>
            <span className="contact-method-text">
              <small>EMAIL ADDRESS</small>
              <strong>{email}</strong>
            </span>
            <ArrowUpRight size={17} className="contact-method-arrow" />
          </a>

          <button
            type="button"
            className="contact-method copy-method"
            onClick={copyEmail}
          >
            <span className="contact-method-icon">
              <Copy size={20} />
            </span>
            <span className="contact-method-text">
              <small>QUICK ACTION</small>
              <strong>Copy email address</strong>
            </span>
            <Copy size={16} className="contact-method-arrow" />
          </button>

          <a href={`tel:${phone}`} className="contact-method">
            <span className="contact-method-icon">
              <Phone size={20} />
            </span>
            <span className="contact-method-text">
              <small>PHONE NUMBER</small>
              <strong>+234 708 077 5058</strong>
            </span>
            <ArrowUpRight size={17} className="contact-method-arrow" />
          </a>

          <div className="contact-location">
            <MapPin size={17} />
            <span>Based in Nigeria</span>
          </div>

          <div className="contact-note">
            <CheckCircle2 size={17} />
            <span>Thoughtful support. Meaningful results.</span>
          </div>
        </div>
      </motion.div>

      <div className="contact-bottom redesigned-contact-bottom">
        <span>Precious Bassey · Customer Service Representative</span>
        <span>People first. Always.</span>
      </div>
    </section>
  );
}
