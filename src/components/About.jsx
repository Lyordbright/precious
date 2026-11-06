
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, CalendarDays } from 'lucide-react';

const details = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Sc Environmental Biology' },
  { icon: Award, label: 'University', value: 'University of Calabar' },
  { icon: CalendarDays, label: 'Graduated', value: '2024' },
//   { icon: MapPin, label: 'Based in', value: 'Nigeria' },
];

export default function About() {
  return (
    <section className="about section-container" id="about">
      <div className="section-heading">
        <span className="eyebrow">01 — WHO I AM</span>
        <h2>A little about <span>me.</span></h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="about-lead">
            I'm Precious — a customer service professional who genuinely
            enjoys connecting with people.
          </p>

          <p>
            Most of my days are spent answering questions, easing worries,
            and making sure someone on the other end of the line feels heard.
          </p>

          <p>
            I've worked in fast-paced support environments handling inbound
            inquiries, outbound satisfaction and renewal calls, and cold
            outreach to new prospects.
          </p>

          <p>
            What I'm proudest of is building rapport, nurturing hesitant
            leads into qualified opportunities, and communicating in a way
            that makes people feel confident about their decisions.
          </p>

          <p>
            Beyond customer conversations, I value accurate documentation,
            compliance, and consistent follow-ups. I take ownership of
            every interaction until the customer knows exactly what happens next.
          </p>
        </motion.div>

        <motion.div
          className="about-details"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {details.map(({ icon: Icon, label, value }) => (
            <div className="detail-card" key={label}>
              <div className="detail-icon"><Icon size={21} /></div>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            </div>
          ))}

          <div className="certification-card">
            <span>PROFESSIONAL CERTIFICATION</span>
            <h3>Dakins Foreign CS Training</h3>
            <p>Customer service training and professional development.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
