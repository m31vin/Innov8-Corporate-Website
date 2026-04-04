const fs = require('fs');
const path = require('path');

const appTsx = fs.readFileSync('src/App.tsx', 'utf-8');

const imports = `import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';`;

// Extract components
const componentRegex = /^const ([A-Z][a-zA-Z0-9_]*) = (.*?)^(?=const [A-Z]|export default function App)/gms;

let match;
const components = {};

while ((match = componentRegex.exec(appTsx)) !== null) {
  components[match[1]] = "const " + match[1] + " = " + match[2];
}

// Ensure directories exist
const dirs = ['src/components/ui', 'src/components/layout', 'src/components/sections', 'src/pages'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const componentCategories = {
  ui: ['FadeIn', 'AnimatedCounter', 'FAQItem'],
  layout: ['Navbar', 'Footer', 'ScrollToTop'],
  sections: ['Hero', 'Pillars', 'About', 'Deployment', 'CloudSection', 'Solutions', 'ContactSection', 'Partners', 'ServicesContent', 'ServicesProcess'],
  pages: ['HomePage', 'ServicesPage', 'AboutPage', 'DeploymentPage', 'CloudPage', 'SolutionsPage', 'PartnersPage', 'ContactPage']
};

const getImportsForComponent = (name, code) => {
  let res = imports + '\n';
  
  // Add local imports
  const allComponents = Object.keys(components);
  const usedComponents = allComponents.filter(c => c !== name && (code.includes('<' + c) || code.includes(c + ' ') || code.includes(c + ',')));
  
  usedComponents.forEach(c => {
    let folder = '';
    if (componentCategories.ui.includes(c)) folder = '../components/ui';
    else if (componentCategories.layout.includes(c)) folder = '../components/layout';
    else if (componentCategories.sections.includes(c)) folder = '../components/sections';
    else if (componentCategories.pages.includes(c)) folder = '../pages';
    
    if (componentCategories.pages.includes(name)) {
      // we are in pages/
      if (folder.startsWith('../')) folder = folder;
    } else if (componentCategories.sections.includes(name)) {
      // we are in components/sections/
      if (folder.startsWith('../components/')) folder = folder.replace('../components/', '../');
      else if (folder.startsWith('../pages')) folder = '../../pages';
    } else if (componentCategories.layout.includes(name)) {
      if (folder.startsWith('../components/')) folder = folder.replace('../components/', '../');
    } else if (componentCategories.ui.includes(name)) {
      if (folder.startsWith('../components/')) folder = folder.replace('../components/', '../');
    }
    
    res += "import { " + c + " } from '" + folder + "/" + c + "';\n";
  });
  
  return res;
};

for (const [category, names] of Object.entries(componentCategories)) {
  for (const name of names) {
    if (components[name]) {
      let folder = category === 'pages' ? 'src/pages' : "src/components/" + category;
      let code = getImportsForComponent(name, components[name]) + '\n' + components[name] + "\nexport { " + name + " };\n";
      fs.writeFileSync(folder + "/" + name + ".tsx", code);
    }
  }
}

// Write App.tsx
const appCode = imports + `
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { CloudPage } from './pages/CloudPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-cyan-500/30">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 origin-left z-[100]"
          style={{ scaleX }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/deployment" element={<DeploymentPage />} />
          <Route path="/cloud" element={<CloudPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}
`;

fs.writeFileSync('src/App.tsx', appCode);
console.log('Refactoring complete.');
