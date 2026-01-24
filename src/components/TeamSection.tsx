import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';
import { TeamMember } from '../types';

interface GitHubMember {
  login: string;
  avatar_url: string;
  html_url: string;
}

const TeamSection: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/OpenVertex/members');
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        const data: GitHubMember[] = await response.json();
        
        let teamMembers: TeamMember[] = data.map(m => ({
          name: m.login,
          role: 'Core Contributor',
          avatar: m.avatar_url,
          github: m.html_url,
          bio: 'Building the future of Open Source.'
        }));

        setMembers(teamMembers);
      } catch (err) {
        console.error(err);
        setError('Failed to load member data from Neural Network.');
        // Fallback data if API fails
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-vertex-primary">&lt;</span> CORE_AGENTS <span className="text-vertex-primary">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            // Accessing personnel database...
            <br />
            // Found {members.length} active agents.
            {members.length === 0 && (
              <span className="block mt-2 text-vertex-highlight text-sm">
                [TIP: Members must set visibility to "Public" in GitHub Org settings to appear here]
              </span>
            )}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="text-vertex-primary animate-pulse font-mono text-xl">
              &gt; DECRYPTING_DATA...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
