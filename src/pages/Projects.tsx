import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  topics: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/orgs/OpenVertex/repos?sort=updated&direction=desc');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data: GitHubRepo[] = await response.json();
        
        const repoProjects: Project[] = data
          .map(repo => ({
            id: repo.name,
            name: repo.name.replace(/-/g, ' ').toUpperCase(),
            description: repo.description || 'No description provided.',
            language: repo.language || 'Code',
            stars: repo.stargazers_count,
            url: repo.html_url,
            tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Open Source']
          }));
        
        setProjects(repoProjects);
      } catch (err) {
        console.error(err);
        // Fallback to empty or error state, but user requested NO example data
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Open Source <span className="text-vertex-primary">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore our cutting-edge open source contributions. From distributed systems to UI libraries, we build tools that empower developers.
        </motion.p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="text-vertex-primary animate-pulse font-mono text-xl">
            &gt; SYNCING_REPOSITORIES...
          </div>
        </div>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 font-mono mt-10">
          // No public repositories found.
        </div>
      )}
    </div>
  );
};

export default Projects;
