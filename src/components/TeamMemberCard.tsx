import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-vertex-secondary/50 border border-vertex-secondary p-6 rounded-lg overflow-hidden hover:border-vertex-primary transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vertex-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-vertex-secondary group-hover:border-vertex-primary transition-colors duration-300">
            <img 
              src={member.avatar} 
              alt={member.name} 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-vertex-bg p-1.5 rounded-full border border-vertex-secondary group-hover:border-vertex-primary transition-colors">
            <Github className="w-4 h-4 text-gray-400 group-hover:text-vertex-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white group-hover:text-vertex-primary transition-colors">{member.name}</h3>
        <p className="text-sm text-vertex-primary font-mono mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{member.bio || 'Open Source Contributor'}</p>
        
        <a 
          href={member.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 text-xs font-mono text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
        >
          @{member.github.split('/').pop()}
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
