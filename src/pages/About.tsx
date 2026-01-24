import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Globe } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/OpenVertex/members');
        if (!response.ok) throw new Error('Failed to fetch members');
        const data = await response.json();
        
        const teamMembers: TeamMember[] = data.map((m: any) => ({
          name: m.login,
          role: 'Core Member',
          avatar: m.avatar_url,
          github: m.html_url,
          bio: 'Building the future of Open Source.'
        }));
        
        setMembers(teamMembers);
      } catch (err) {
        console.error(err);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

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
          <p className="text-gray-400 font-mono">// Found {members.length} active agents.</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="text-vertex-primary animate-pulse font-mono text-xl">
              &gt; DECRYPTING_TEAM_DATA...
            </div>
          </div>
        ) : members.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 font-mono mt-10">
            // No public core members found.
            <br />
            <span className="text-xs text-vertex-highlight mt-2 block">[提示：组织成员需在 GitHub 组织设置中将身份设为“公开 (Public)”才能在此显示]</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
