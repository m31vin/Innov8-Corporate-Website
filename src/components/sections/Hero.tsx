import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Infrastructure');

  const bentoData: Record<string, { title: string, desc: string }[]> = {
    'Infrastructure': [
      { title: 'Enterprise Deployment', desc: 'Productivity, hardware, network, and workplace setup for modern teams.' },
      { title: 'Network Solutions', desc: 'Secure, high-performance networking and Wi-Fi deployments.' },
      { title: 'Hardware Leasing', desc: 'Flexible device procurement and lifecycle management.' },
      { title: 'Security & Compliance', desc: 'Endpoint protection, access control, and compliance audits.' },
    ],
    'Cloud': [
      { title: 'Cloud Architecture', desc: 'AWS, Google Cloud, Azure, hybrid environments, and managed IT.' },
      { title: 'Cloud Migration', desc: 'Seamless transition of legacy systems to modern cloud infrastructure.' },
      { title: 'Data Backup', desc: 'Resilient disaster recovery and automated backup solutions.' },
      { title: 'DevOps & CI/CD', desc: 'Streamlined development pipelines and automated deployments.' },
    ],
    'Business Systems': [
      { title: 'Operational Systems', desc: 'HRIS, accounting, websites, eCommerce, and automation platforms.' },
      { title: 'ERP Integration', desc: 'Connecting core business processes for unified data flow.' },
      { title: 'CRM Implementation', desc: 'Salesforce, HubSpot, and custom CRM solutions for sales teams.' },
      { title: 'Custom Development', desc: 'Tailored software solutions to meet unique business requirements.' },
    ],
    'AI Automation': [
      { title: 'Built for Growth', desc: 'Modern, scalable, and partner-friendly digital foundations.' },
      { title: 'Process Automation', desc: 'RPA and custom scripts to eliminate repetitive manual tasks.' },
      { title: 'AI Chatbots', desc: 'Intelligent conversational agents for customer support.' },
      { title: 'Data Analytics', desc: 'Machine learning models for predictive business intelligence.' },
    ]
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-28 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.04]"></div>
      </div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 z-0"
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="flex flex-col items-center">
          
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 backdrop-blur-md">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Innov8 Information Technology Services</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Building Reliable <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 animate-gradient-x">
                Digital Foundations
              </span> <br className="hidden sm:block" />
              for Modern Businesses
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              From infrastructure and cloud to business systems and AI-powered platforms, Innov8 helps organizations deploy, scale, and transform with confidence.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full sm:w-auto">
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group">
              Get a Free Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl bg-white/80 hover:bg-slate-50 text-slate-900 font-bold text-lg border border-slate-200 transition-all shadow-sm flex items-center justify-center backdrop-blur-md">
              Partner With Us
            </Link>
          </FadeIn>

          {/* Stats Row */}
          <FadeIn delay={0.4} className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">20+</div>
              <div className="text-sm text-slate-600 leading-snug font-medium">Years of founder-led IT experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">5</div>
              <div className="text-sm text-slate-600 leading-snug font-medium">Core technology pillars</div>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">End-to-End</div>
              <div className="text-sm text-slate-600 leading-snug font-medium">Infrastructure to business systems</div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};


export { Hero };
