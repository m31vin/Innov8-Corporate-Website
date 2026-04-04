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
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Enterprise-grade cloud solutions designed for scale, security, and high availability.",
      features: ["AWS & Azure Migration", "Cloud-Native Development", "Serverless Architecture"],
      color: "from-blue-500 to-cyan-400",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Military-grade protection for your digital assets and infrastructure.",
      features: ["Zero-Trust Networks", "Threat Intelligence", "Compliance Audits"],
      color: "from-indigo-500 to-purple-400",
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure",
      description: "Robust hardware and network provisioning for modern enterprises.",
      features: ["Data Center Design", "Network Optimization", "Hardware Lifecycle"],
      color: "from-cyan-500 to-teal-400",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software",
      description: "Bespoke applications built to solve complex business challenges.",
      features: ["Full-Stack Development", "API Integration", "Legacy Modernization"],
      color: "from-blue-400 to-indigo-500",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
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
                  whileHover={{ y: -10 }}
                  className="relative group rounded-3xl overflow-hidden bg-white border border-slate-200 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Background Image that appears on hover */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-white/60"></div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0`}></div>
                  
                  <div className="relative z-10 p-8 lg:p-12 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-slate-700">{service.icon}</div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">{service.title}</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed flex-grow group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
