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

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Office Setup",
      description: "Complete workplace deployment for modern teams.",
      features: ["Microsoft 365 deployment", "Google Workspace setup", "Domain and email configuration", "Data migration support"],
      color: "from-blue-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Device Leasing & Hardware",
      description: "Reliable sourcing, refresh, and rollout of business devices.",
      features: ["Hardware procurement", "Device leasing and installation", "Network infrastructure", "Workstation solutions"],
      color: "from-indigo-500 to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud and hybrid environments for secure growth.",
      features: ["Cloud infrastructure deployment", "Hybrid cloud architecture", "Virtual machines and virtualization", "Cloud migration services"],
      color: "from-cyan-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Service & Consulting",
      description: "Strategic IT guidance aligned with business outcomes.",
      features: ["Infrastructure assessment", "Technology roadmap planning", "Cybersecurity advisory", "Managed IT services"],
      color: "from-violet-500 to-violet-600",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Business Solutions",
      description: "Digital platforms that automate operations and unlock efficiency.",
      features: ["Website development", "HRIS system", "Accounting system", "eCommerce and AI platforms"],
      color: "from-teal-500 to-teal-600",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-cyan-500/30">
      {/* Cinematic Hero */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white"></div>
        </div>

        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] z-0"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] z-0"
        />
        
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
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 border border-slate-200 text-cyan-600 text-sm font-medium tracking-wide mb-8 backdrop-blur-md cursor-pointer shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                ENTERPRISE SOLUTIONS
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Engineering <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-gradient-x">
                  Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                Comprehensive IT services designed to accelerate your digital transformation and secure your competitive advantage.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Interactive Services Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative group rounded-[2.5rem] overflow-hidden bg-white border border-slate-200 h-full flex flex-col shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
                >
                  {/* Background Image that appears and scales on hover */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    <motion.img 
                      src={service.bgImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-20" 
                      referrerPolicy="no-referrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40"></div>
                  </div>
                  
                  {/* Moving Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0`}></div>
                  
                  <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <div className="text-white drop-shadow-md">{service.icon}</div>
                    </motion.div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed flex-grow group-hover:text-slate-800 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0.8, x: 0 }}
                          whileHover={{ opacity: 1, x: 5 }}
                          className="flex items-center gap-3 text-slate-700 font-medium"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                          </div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 group-hover:border-blue-100 transition-colors">
                      <Link to="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Learn more about {service.title.split(' ')[0]}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Transform Your IT?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Partner with us to build a resilient, scalable, and secure technology foundation for your business.
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all inline-block"
              >
                Schedule a Consultation
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export { ServicesPage };
