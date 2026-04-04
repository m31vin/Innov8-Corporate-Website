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

const ServicesProcess = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "We analyze your current infrastructure and business goals." },
    { num: "02", title: "Strategy", desc: "Our architects design a tailored, scalable technology roadmap." },
    { num: "03", title: "Deployment", desc: "Seamless implementation with zero disruption to your operations." },
    { num: "04", title: "Optimization", desc: "Continuous monitoring, support, and performance tuning." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Proven Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">How we deliver consistent, high-quality results for every client.</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="relative group">
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent -z-10"></div>
                )}
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-500/30 flex items-center justify-center text-xl font-bold text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export { ServicesProcess };
