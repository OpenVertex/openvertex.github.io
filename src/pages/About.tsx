import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Globe } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Architect',
    avatar: 'https://github.com/alex.png', // Placeholder
    github: 'https://github.com/alex',
    bio: 'Passionate about distributed systems and open source ecosystems.',
  },
  {
    name: 'Sarah Jones',
    role: 'Core Maintainer',
    avatar: 'https://github.com/sarah.png', // Placeholder
    github: 'https://github.com/sarah',
    bio: 'Frontend wizard and UI/UX enthusiast. Building beautiful interfaces.',
  },
  {
    name: 'Mike Ross',
    role: 'DevOps Engineer',
    avatar: 'https://github.com/mike.png', // Placeholder
    github: 'https://github.com/mike',
    bio: 'Automating everything. Kubernetes and CI/CD expert.',
  },
  {
    name: 'Emily Wang',
    role: 'Community Manager',
    avatar: 'https://github.com/emily.png', // Placeholder
    github: 'https://github.com/emily',
    bio: 'Connecting developers and fostering a welcoming community.',
  },
];

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Introduction Section */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-vertex-primary">OpenVertex</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            OpenVertex is a forward-thinking open source organization dedicated to building the next generation of developer tools and infrastructure. We believe in the power of code to transform the world and the spirit of collaboration to drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            { icon: Terminal, title: 'Code First', desc: 'We prioritize clean, efficient, and maintainable code in everything we build.' },
            { icon: Globe, title: 'Open Future', desc: 'We are committed to open standards and transparent development processes.' },
            { icon: Code2, title: 'Innovation', desc: 'Pushing the boundaries of what is possible with modern web technologies.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-vertex-secondary/30 p-6 rounded-lg border border-vertex-secondary hover:border-vertex-primary/50 transition-colors"
            >
              <item.icon className="w-10 h-10 text-vertex-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our <span className="text-vertex-primary">Core Team</span></h2>
          <p className="text-gray-400">The minds behind the code.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
