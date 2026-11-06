
import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Client Support Officer',
    company: 'Beaming Leaders Academy',
    period: 'December 2024 — July 2026',
    number: '01',
    responsibilities: [
      'Followed up with prospective students to nurture leads, answer questions, and guide them toward enrolment.',
      'Scheduled appointments for registration officers and ensured prospects had the information needed before consultations.',
      'Coordinated updates, schedules, and course information between students, instructors, and administrative teams.',
      'Processed reschedules, enrolment changes, certificate requests, and account updates within academy policy.',
      'Collected and analysed feedback, sharing insights with management to improve the student experience.'
    ]
  },
  {
    role: 'Customer Service Representative',
    company: 'Department of Crop Protection & Environmental Biology',
    period: 'February 2023 — November 2024',
    number: '02',
    responsibilities: [
      'Handled service requests, correspondence, customer records, and confidential files across departmental systems.',
      'Followed departmental scripts and compliance guidelines while maintaining warm, personalised service.',
      'Collaborated with academic and administrative teams to resolve concerns promptly.',
      'Answered enquiries from prospective students and directed them to the appropriate department.',
      'Explained pest management and environmental conservation topics in clear, accessible language.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience section-container" id="experience">
      <div className="section-heading">
        <span className="eyebrow">04 — WHERE I'VE WORKED</span>
        <h2>Experience built on <span>people skills.</span></h2>
        <p>Every role has strengthened my ability to communicate, organise, and deliver reliable support.</p>
      </div>

      <div className="experience-list">
        {experiences.map((job, index) => (
          <motion.article
            className="experience-card"
            key={job.company}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
          >
            <div className="experience-index">{job.number}</div>

            <div className="experience-main">
              <div className="experience-topline">
                <span><BriefcaseBusiness size={15} /> PROFESSIONAL EXPERIENCE</span>
                <span><CalendarDays size={15} /> {job.period}</span>
              </div>

              <h3>{job.role}</h3>
              <h4>{job.company}</h4>

              <ul>
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <ArrowUpRight className="experience-arrow" size={22} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
