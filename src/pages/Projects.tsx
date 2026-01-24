import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'vertex-engine',
    name: 'Vertex Engine',
    description: 'A high-performance, distributed graph processing engine designed for large-scale social network analysis.',
    language: 'Rust',
    stars: 1245,
    url: 'https://github.com/OpenVertex/vertex-engine',
    tags: ['Distributed Systems', 'Graph Theory', 'Rust'],
  },
  {
    id: 'neural-link',
    name: 'Neural Link',
    description: 'Lightweight neural network interface for edge devices with optimized tensor operations.',
    language: 'C++',
    stars: 892,
    url: 'https://github.com/OpenVertex/neural-link',
    tags: ['AI', 'Edge Computing', 'Neural Networks'],
  },
  {
    id: 'quantum-ui',
    name: 'Quantum UI',
    description: 'A React component library implementing the Cyberpunk/Geek aesthetic with advanced animations.',
    language: 'TypeScript',
    stars: 2341,
    url: 'https://github.com/OpenVertex/quantum-ui',
    tags: ['React', 'UI Library', 'Animation'],
  },
  {
    id: 'cyber-vault',
    name: 'Cyber Vault',
    description: 'Zero-knowledge encryption storage solution for decentralized applications.',
    language: 'Go',
    stars: 654,
    url: 'https://github.com/OpenVertex/cyber-vault',
    tags: ['Security', 'Encryption', 'Go'],
  },
  {
    id: 'nexus-protocol',
    name: 'Nexus Protocol',
    description: 'Next-generation peer-to-peer communication protocol for real-time collaboration tools.',
    language: 'Rust',
    stars: 432,
    url: 'https://github.com/OpenVertex/nexus-protocol',
    tags: ['P2P', 'Networking', 'Protocol'],
  },
  {
    id: 'void-terminal',
    name: 'Void Terminal',
    description: 'A highly customizable, GPU-accelerated terminal emulator built for power users.',
    language: 'Rust',
    stars: 3102,
    url: 'https://github.com/OpenVertex/void-terminal',
    tags: ['Terminal', 'Productivity', 'GPU'],
  },
];

const Projects: React.FC = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
