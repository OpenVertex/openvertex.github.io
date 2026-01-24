import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Star, Share2, Code, Terminal } from 'lucide-react';
import { Project } from '../types';

// Mock data store (duplicated for simplicity, ideally moved to a separate data file)
const projectsData: Record<string, Project> = {
  'vertex-engine': {
    id: 'vertex-engine',
    name: 'Vertex Engine',
    description: 'A high-performance, distributed graph processing engine designed for large-scale social network analysis. It utilizes advanced partitioning algorithms to minimize network overhead and maximize throughput.',
    language: 'Rust',
    stars: 1245,
    url: 'https://github.com/OpenVertex/vertex-engine',
    tags: ['Distributed Systems', 'Graph Theory', 'Rust', 'Big Data'],
  },
  'neural-link': {
    id: 'neural-link',
    name: 'Neural Link',
    description: 'Lightweight neural network interface for edge devices with optimized tensor operations. Designed to run efficiently on low-power hardware like IoT devices and embedded systems.',
    language: 'C++',
    stars: 892,
    url: 'https://github.com/OpenVertex/neural-link',
    tags: ['AI', 'Edge Computing', 'Neural Networks', 'Embedded'],
  },
  'quantum-ui': {
    id: 'quantum-ui',
    name: 'Quantum UI',
    description: 'A React component library implementing the Cyberpunk/Geek aesthetic with advanced animations. Features a comprehensive set of accessible, themeable components powered by Framer Motion.',
    language: 'TypeScript',
    stars: 2341,
    url: 'https://github.com/OpenVertex/quantum-ui',
    tags: ['React', 'UI Library', 'Animation', 'Design System'],
  },
  'cyber-vault': {
    id: 'cyber-vault',
    name: 'Cyber Vault',
    description: 'Zero-knowledge encryption storage solution for decentralized applications. Ensures that your data remains private and secure, even in untrusted environments.',
    language: 'Go',
    stars: 654,
    url: 'https://github.com/OpenVertex/cyber-vault',
    tags: ['Security', 'Encryption', 'Go', 'Web3'],
  },
  'nexus-protocol': {
    id: 'nexus-protocol',
    name: 'Nexus Protocol',
    description: 'Next-generation peer-to-peer communication protocol for real-time collaboration tools. Supports CRDTs out of the box for conflict-free data synchronization.',
    language: 'Rust',
    stars: 432,
    url: 'https://github.com/OpenVertex/nexus-protocol',
    tags: ['P2P', 'Networking', 'Protocol', 'CRDT'],
  },
  'void-terminal': {
    id: 'void-terminal',
    name: 'Void Terminal',
    description: 'A highly customizable, GPU-accelerated terminal emulator built for power users. Features lightning-fast rendering, split panes, and extensive plugin support.',
    language: 'Rust',
    stars: 3102,
    url: 'https://github.com/OpenVertex/void-terminal',
    tags: ['Terminal', 'Productivity', 'GPU', 'Tools'],
  },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500">Project Not Found</h2>
          <Link to="/projects" className="text-vertex-primary hover:underline mt-4 block">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        to="/projects" 
        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-vertex-secondary/30 border border-vertex-secondary rounded-lg overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 border-b border-vertex-secondary bg-vertex-secondary/50">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Code className="w-4 h-4 text-vertex-primary" />
                  {project.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  {project.stars} Stars
                </span>
              </div>
            </div>
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vertex-primary hover:bg-vertex-highlight text-vertex-bg font-bold py-2 px-4 rounded flex items-center gap-2 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">View Code</span>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-vertex-primary" />
              Project Description
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              {project.description}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Technologies & Tags</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags?.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-vertex-secondary border border-vertex-secondary hover:border-vertex-primary rounded text-sm text-gray-300 hover:text-white transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-vertex-secondary/20 p-6 flex justify-between items-center border-t border-vertex-secondary">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
            Share Project
          </button>
          <span className="text-xs text-gray-600 font-mono">ID: {project.id}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
