import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Hero } from '../components/sections/Hero';
import { Solutions } from '../components/sections/Solutions';

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: "Enterprise Modernization",
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      description: "Upgrade legacy systems to agile, cloud-native architectures that drive efficiency and scale with your business.",
      color: "bg-indigo-50 border-indigo-100 hover:border-indigo-300"
    },
    {
      title: "Business Continuity",
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      description: "Robust disaster recovery and backup solutions ensuring your critical operations never miss a beat.",
      color: "bg-emerald-50 border-emerald-100 hover:border-emerald-300"
    },
    {
      title: "Digital Workspace",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      description: "Empower your remote and hybrid workforce with secure, collaborative, and highly accessible digital environments.",
      color: "bg-blue-50 border-blue-100 hover:border-blue-300"
    },
    {
      title: "Data Analytics & AI",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      description: "Transform raw data into actionable insights with advanced analytics and machine learning integrations.",
      color: "bg-purple-50 border-purple-100 hover:border-purple-300"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-indigo-500/30">
      {/* Hero Section */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
            alt="Solutions Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 border border-slate-200 text-indigo-600 text-sm font-medium tracking-wide mb-8 backdrop-blur-md cursor-pointer shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                INNOVATIVE STRATEGIES
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Tailored IT <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-gradient-x">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                We don't just provide technology; we solve complex business challenges with strategic, scalable, and innovative IT solutions.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Solving Your Toughest Challenges</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Discover how our targeted solutions can drive your business forward.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className={`p-10 rounded-3xl border transition-all duration-300 hover:shadow-xl group h-full ${solution.color}`}>
                  <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Approach to Problem Solving</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We believe that the best solutions come from a deep understanding of your unique business landscape. Our methodology ensures alignment with your strategic goals.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Discovery & Analysis", desc: "Deep dive into your current state and objectives." },
                  { title: "Strategic Design", desc: "Architecting a tailored solution blueprint." },
                  { title: "Agile Implementation", desc: "Iterative deployment with minimal disruption." },
                  { title: "Continuous Optimization", desc: "Ongoing refinement and proactive support." }
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold border border-indigo-500/30">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                      <p className="text-slate-400 mt-1">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Methodology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Find Your Solution?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Let's collaborate to build the technology foundation your business needs to thrive in a digital-first world.
            </p>
            <Link 
              to="/contact"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Our Experts
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export { SolutionsPage };
