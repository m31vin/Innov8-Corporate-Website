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
import { About } from '../components/sections/About';
import { ContactSection } from '../components/sections/ContactSection';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Innovation First",
      description: "We constantly explore emerging technologies to bring the most advanced and efficient solutions to our clients.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Uncompromising Security",
      description: "Security isn't an afterthought; it's the foundation of every architecture, deployment, and line of code we write.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400"
    },
    {
      title: "Client-Centric Excellence",
      description: "Your success is our success. We build partnerships, not just vendor relationships, ensuring long-term growth.",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-400"
    },
    {
      title: "Agility & Speed",
      description: "In a fast-paced digital world, we deliver rapid deployments and agile iterations without sacrificing quality.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-cyan-500/30">
      {/* Cinematic Hero */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
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
                WHO WE ARE
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                About <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-gradient-x">
                  Innov8
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                We are a team of visionary engineers, architects, and strategists dedicated to building the digital foundations of tomorrow.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-0"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Modern Workspace" 
                    className="object-cover h-[500px] w-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Empowering Businesses Through Technology</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded on the belief that technology should be an enabler, not a hurdle, Innov8 has grown into a premier IT solutions provider. We partner with organizations of all sizes to navigate the complexities of the digital landscape.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 border border-cyan-100">
                    <Target className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-slate-600 leading-relaxed">To deliver innovative, secure, and scalable IT solutions that empower our clients to achieve their strategic goals and dominate their markets.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                    <p className="text-slate-600 leading-relaxed">To be the globally recognized leader in digital transformation, setting the standard for excellence in cloud architecture, cybersecurity, and IT infrastructure.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">The principles that guide our decisions, shape our culture, and drive our success.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-cyan-200 hover:shadow-xl transition-all duration-500 group relative overflow-hidden h-full flex flex-col shadow-sm"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-slate-700">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};


export { AboutPage };
