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

const Solutions = () => {
  const solutions = [
    { icon: <Globe className="w-6 h-6" />, title: "Website Development", tag: "Lead Generation", desc: "Custom business websites built for credibility, responsiveness, content management, and SEO readiness." },
    { icon: <Users className="w-6 h-6" />, title: "HRIS System", tag: "People Ops", desc: "Human resource management covering payroll, attendance, and employee self-service." },
    { icon: <Calculator className="w-6 h-6" />, title: "Accounting System", tag: "Finance", desc: "Streamlined accounting and financial reporting for invoices, expenses, and analytics." },
    { icon: <ShoppingCart className="w-6 h-6" />, title: "eCommerce & MLM", tag: "Sales Growth", desc: "Online sales and network marketing platform with store, distributor network, and commission tracking." },
    { icon: <Bot className="w-6 h-6" />, title: "Glem AI Platform", tag: "Automation", desc: "AI-powered business automation, insight generation, and smarter decision support." },
    { icon: <Shield className="w-6 h-6" />, title: "Cybersecurity", tag: "Protection", desc: "Enterprise-grade security solutions to protect your network, data, and digital assets." },
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 mb-4">
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Business Solutions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Digital Systems for Modern Businesses</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Integrated platforms that automate workflows, improve visibility, and support digital growth.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="h-full">
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-slate-100 p-8 rounded-3xl h-full shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 transition-colors duration-500 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {sol.icon}
                    </div>
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors duration-300 text-xs font-semibold rounded-full">{sol.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">{sol.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{sol.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export { Solutions };
