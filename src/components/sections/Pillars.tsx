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
import { About } from '../sections/About';

const Pillars = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const pillars = [
    { 
      icon: <Monitor />, 
      title: "Office Setup", 
      desc: "Complete workplace deployment for modern teams.",
      bullets: [
        "Microsoft 365 deployment",
        "Google Workspace setup",
        "Domain and email configuration",
        "Data migration support"
      ],
      theme: {
        bg: "bg-blue-600",
        text: "text-white",
        iconBg: "bg-white/20",
        bulletIcon: "text-white/80"
      }
    },
    { 
      icon: <Cpu />, 
      title: "Device Leasing & Hardware", 
      desc: "Reliable sourcing, refresh, and rollout of business devices.",
      bullets: [
        "Hardware procurement",
        "Device leasing and installation",
        "Network infrastructure",
        "Workstation solutions"
      ],
      theme: {
        bg: "bg-indigo-600",
        text: "text-white",
        iconBg: "bg-white/20",
        bulletIcon: "text-white/80"
      }
    },
    { 
      icon: <Cloud />, 
      title: "Cloud Infrastructure", 
      desc: "Scalable cloud and hybrid environments for secure growth.",
      bullets: [
        "Cloud infrastructure deployment",
        "Hybrid cloud architecture",
        "Virtual machines and virtualization",
        "Cloud migration services"
      ],
      theme: {
        bg: "bg-cyan-600",
        text: "text-white",
        iconBg: "bg-white/20",
        bulletIcon: "text-white/80"
      }
    },
    { 
      icon: <Briefcase />, 
      title: "Service & Consulting", 
      desc: "Strategic IT guidance aligned with business outcomes.",
      bullets: [
        "Infrastructure assessment",
        "Technology roadmap planning",
        "Cybersecurity advisory",
        "Managed IT services"
      ],
      theme: {
        bg: "bg-violet-600",
        text: "text-white",
        iconBg: "bg-white/20",
        bulletIcon: "text-white/80"
      }
    },
    { 
      icon: <Code />, 
      title: "Business Solutions", 
      desc: "Digital platforms that automate operations and unlock efficiency.",
      bullets: [
        "Website development",
        "HRIS system",
        "Accounting system",
        "eCommerce and AI platforms"
      ],
      theme: {
        bg: "bg-teal-600",
        text: "text-white",
        iconBg: "bg-white/20",
        bulletIcon: "text-white/80"
      }
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0f1c] relative z-20 border-t border-slate-800">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need. One Strategic IT Partner.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Innov8 combines enterprise-grade infrastructure, cloud capability, and business solutions to help companies grow faster with less complexity.</p>
          </FadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[450px]">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedIdx === idx;
            
            return (
              <motion.div 
                key={idx}
                layout
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className={`relative rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'lg:w-[400px] flex-shrink-0' : 'lg:flex-1'
                } ${isExpanded ? pillar.theme.bg : 'bg-[#131b2f] hover:bg-[#1a243d]'}`}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Collapsed State */}
                  {!isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-700/50">
                        <div className="text-slate-400">
                          {React.cloneElement(pillar.icon as React.ReactElement, { size: 32 })}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-4">{pillar.title}</h3>
                      <div className="w-8 h-1 rounded-full bg-slate-700"></div>
                    </motion.div>
                  )}

                  {/* Expanded State */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col h-full"
                    >
                      <div className={`w-12 h-12 rounded-xl ${pillar.theme.iconBg} flex items-center justify-center mb-6 shrink-0`}>
                        <div className="text-white">
                          {React.cloneElement(pillar.icon as React.ReactElement, { size: 24 })}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{pillar.title}</h3>
                      <p className="text-white/90 text-sm mb-8 leading-relaxed font-medium">{pillar.desc}</p>
                      
                      <ul className="space-y-4 mb-auto">
                        {pillar.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                            <CheckCircle2 className={`w-5 h-5 ${pillar.theme.bulletIcon} shrink-0`} />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 text-center">
                        <span className="text-white/70 text-sm font-medium hover:text-white transition-colors">
                          Click to close
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <Link 
            to="/services" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 group"
          >
            Learn More About Our Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export { Pillars };
