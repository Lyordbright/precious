
import { motion } from 'framer-motion';

const highlights = [
  { value: '3+', label: 'Years of experience', detail: 'Customer-facing support roles' },
  { value: '2', label: 'Work environments', detail: 'Education academy and university department' },
  { value: '9', label: 'Professional tools', detail: 'CRM and productivity platforms' },
  { value: '100%', label: 'Follow-up ownership', detail: 'A commitment to seeing issues through' }
];

export default function Highlights() {
  return (
    <section className="highlights section-container">
      <div className="highlights-heading">
        <span className="eyebrow">05 — A FEW THINGS I'M PROUD OF</span>
        <h2>Consistency you can <span>count on.</span></h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <motion.div
            className="highlight-card"
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
