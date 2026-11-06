
import { motion } from 'framer-motion';
import { Workflow, MessageSquare, FileSpreadsheet } from 'lucide-react';

const tools = [
  { name: 'Zoho CRM Plus', category: 'CRM' },
  { name: 'Salesforce Essentials', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Asana', category: 'Project management' },
  { name: 'Trello', category: 'Project management' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Google Sheets', category: 'Productivity' },
  { name: 'Microsoft Excel', category: 'Productivity' }
];

const groups = [
  { name: 'CRM & Customer Management', icon: Workflow },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Productivity & Organisation', icon: FileSpreadsheet }
];

export default function Tools() {
  return (
    <section className="tools section-container" id="tools">
      <div className="section-heading">
        <span className="eyebrow">03 — MY TOOLKIT</span>
        <h2>Technology that keeps me <span>organised.</span></h2>
        <p>Tools I use to manage conversations, workflows, and customer information.</p>
      </div>

      <div className="tools-grid">
        {groups.map((group, index) => {
          const items = tools.filter(tool =>
            index === 0 ? tool.category === 'CRM' :
            index === 1 ? tool.category === 'Communication' :
            tool.category === 'Productivity'
          );

          return (
            <motion.div
              className="tool-group"
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="tool-group-heading">
                <group.icon size={20} />
                <h3>{group.name}</h3>
              </div>

              <div className="tool-list">
                {items.map(tool => (
                  <span className="tool-tag" key={tool.name}>
                    {tool.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
