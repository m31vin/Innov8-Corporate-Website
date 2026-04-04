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
        lightBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        borderColor: "border-blue-500/20",
        gradient: "from-blue-500 to-cyan-400",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        hoverBorder: "group-hover:border-blue-400/50"
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
        lightBg: "bg-indigo-500/10",
        iconColor: "text-indigo-400",
        borderColor: "border-indigo-500/20",
        gradient: "from-indigo-500 to-purple-400",
        shadow: "shadow-[0_0_30px_rgba(99,102,241,0.3)]",
        hoverBorder: "group-hover:border-indigo-400/50"
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
        lightBg: "bg-cyan-500/10",
        iconColor: "text-cyan-400",
        borderColor: "border-cyan-500/20",
        gradient: "from-cyan-500 to-teal-400",
        shadow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        hoverBorder: "group-hover:border-cyan-400/50"
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
        lightBg: "bg-amber-500/10",
        iconColor: "text-amber-400",
        borderColor: "border-amber-500/20",
        gradient: "from-amber-500 to-orange-400",
        shadow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
        hoverBorder: "group-hover:border-amber-400/50"
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
        lightBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
        borderColor: "border-emerald-500/20",
        gradient: "from-emerald-500 to-teal-400",
        shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
        hoverBorder: "group-hover:border-emerald-400/50"
      }
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative z-20 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 mb-4 backdrop-blur-md">
              <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">Core Technology Pillars</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need. One Strategic IT Partner.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Innov8 combines enterprise-grade infrastructure, cloud capability, and business solutions to help companies grow faster with less complexity.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up" className="h-full perspective-1000">
              <motion.div 
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-[420px] transform-style-3d group cursor-pointer"
              >
                {/* Front */}
                <div className={`absolute inset-0 bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col items-center justify-center text-center backface-hidden transition-all duration-300 ${pillar.theme.hoverBorder}`}>
                  <div className={`w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:${pillar.theme.lightBg} transition-colors border border-slate-700 ${pillar.theme.hoverBorder}`}>
                    <div className={`text-slate-400 group-hover:${pillar.theme.iconColor} transition-colors`}>
                      {React.cloneElement(pillar.icon as React.ReactElement, { size: 40 })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                  <div className={`w-12 h-1 rounded-full bg-slate-700 group-hover:bg-gradient-to-r ${pillar.theme.gradient} transition-all duration-300`}></div>
                  <p className={`text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity ${pillar.theme.iconColor}`}>Hover to view details</p>
                </div>
                
                {/* Back */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.theme.gradient} p-6 rounded-3xl ${pillar.theme.shadow} flex flex-col text-left backface-hidden rotate-y-180 overflow-hidden`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 shrink-0 border border-white/30">
                    <div className="text-white">
                      {React.cloneElement(pillar.icon as React.ReactElement, { size: 24 })}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{pillar.title}</h3>
                  <p className="text-white/90 text-sm mb-6 leading-relaxed font-medium">{pillar.desc}</p>
                  
                  <ul className="space-y-3 mt-6">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-white/95 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <Link 
            to="/services" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 group"
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
