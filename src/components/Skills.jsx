
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  Ear,
  Package,
  ClipboardCheck,
  Clock,
  Lightbulb
} from 'lucide-react';

const skills = [
  {
    icon: HeartHandshake,
    title: 'Conflict resolution',
    description: 'Staying calm and fair when a customer is frustrated, finding an outcome that works for everyone.'
  },
  {
    icon: Ear,
    title: 'Active listening',
    description: 'Understanding the real concern behind a question instead of simply responding to the words.'
  },
  {
    icon: Package,
    title: 'Product knowledge',
    description: 'Explaining products and services in clear, everyday language that builds trust.'
  },
  {
    icon: ClipboardCheck,
    title: 'Attention to detail',
    description: 'Maintaining accurate records, following correct processes, and ensuring reliable follow-ups.'
  },
  {
    icon: Clock,
    title: 'Time management',
    description: 'Keeping response times tight and priorities organised, even during busy shifts.'
  },
  {
    icon: Lightbulb,
    title: 'Problem-solving',
    description: 'Taking ownership from the first customer contact through to complete resolution.'
  }
];

export default function Skills() {
  return (
    <section className="skills section-container" id="skills">
      <div className="section-heading">
        <span className="eyebrow">02 — WHAT I'M GOOD AT</span>
        <h2>Skills that make <span>a difference.</span></h2>
        <p>The qualities I bring to every customer interaction.</p>
      </div>

      <div className="skills-grid">
        {skills.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            className="skill-card"
            key={title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="skill-icon"><Icon size={24} /></div>
            <span className="skill-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
