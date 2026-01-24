import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vertex-secondary border-t border-vertex-secondary/50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white tracking-wider">OpenVertex</span>
            <p className="text-gray-400 text-sm mt-1">Open Source, Open Future.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/OpenVertex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vertex-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-vertex-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:contact@openvertex.org" className="text-gray-400 hover:text-vertex-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} OpenVertex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
