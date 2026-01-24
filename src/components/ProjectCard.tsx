import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, GitFork, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex flex-col h-full bg-vertex-secondary/30 border border-vertex-secondary hover:border-vertex-primary hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] rounded-lg p-6 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-vertex-primary transition-colors">
          {project.name}
        </h3>
        <span className="text-xs font-mono px-2 py-1 rounded bg-vertex-secondary border border-vertex-secondary/50 text-vertex-highlight">
          {project.language}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex space-x-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{Math.floor(project.stars / 3)}</span>
          </div>
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="flex items-center gap-1 text-sm font-bold text-vertex-primary hover:text-vertex-highlight transition-colors"
        >
          DETAILS <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
