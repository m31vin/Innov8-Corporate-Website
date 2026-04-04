import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white/90"></div>
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-slate-900 p-10 text-white relative overflow-hidden border-r border-slate-800/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
              
              <h3 className="text-3xl font-bold mb-2 relative z-10">Get in Touch</h3>
              <p className="text-slate-400 mb-10 relative z-10">Let's Build Your Digital Foundation.</p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <Mail className="text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Email</p>
                    <a href="mailto:innov8its@innov8.net.ph" className="text-lg hover:text-cyan-400 transition-colors">innov8its@innov8.net.ph</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Phone</p>
                    <a href="tel:+639273692027" className="text-lg hover:text-cyan-400 transition-colors">+63 927 369 2027</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 font-medium">Address</p>
                    <p className="text-lg text-slate-300">258 M. Cleofas St., Brgy 162,<br/>Caloocan City</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-10 lg:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                    <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Company</label>
                    <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
                    <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">Phone</label>
                    <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 appearance-none">
                    <option className="bg-white">Office Setup</option>
                    <option className="bg-white">Cloud Infrastructure</option>
                    <option className="bg-white">Business Solutions</option>
                    <option className="bg-white">IT Consulting</option>
                    <option className="bg-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your requirements" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white text-slate-900 placeholder-slate-400 resize-none"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export { ContactSection };
