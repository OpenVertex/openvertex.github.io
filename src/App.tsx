import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

function App() {
  // Determine basename based on environment
  // For GitHub Pages, it usually is the repo name
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-vertex-bg">
            <div className="text-vertex-primary font-mono text-xl animate-pulse">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
