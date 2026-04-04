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

const CloudSection = () => {
  return (
    <section id="cloud" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Image with Overlay and Slow Pan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          animate={{ x: ["0%", "-5%"], y: ["0%", "-2%"] }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 20, ease: "linear" }}
          src="https://picsum.photos/seed/cloudnetwork/1920/1080?blur=2" 
          alt="Cloud Network" 
          className="w-[110%] h-[110%] object-cover opacity-20 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-50/85 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Cloud Infrastructure <br/><span className="text-blue-600">& IT Consulting</span></h2>
            <p className="text-lg text-slate-600 mb-8">
              Secure, scalable infrastructure strategy supported by practical consulting and implementation services.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className="flex gap-4 p-4 -ml-4 rounded-2xl hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-slate-200"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Cloud className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Cloud Infrastructure</h4>
                  <p className="text-slate-600">AWS, Google Cloud, and Azure deployment. Hybrid cloud architecture, virtual machines, and private/on-premise server infrastructure.</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className="flex gap-4 p-4 -ml-4 rounded-2xl hover:shadow-lg transition-all cursor-pointer border border-transparent hover:border-slate-200"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                  <Shield className="text-cyan-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">IT Consulting & Managed Services</h4>
                  <p className="text-slate-600">Infrastructure assessment, technology roadmap planning, secure cloud network design, and project implementation.</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl transform -rotate-3 scale-105 opacity-20 blur-xl"></div>
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-2xl relative">
              
              {/* Sliding Marquee for Cloud Providers */}
              <div className="relative w-full overflow-hidden mb-8 group">
                <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                <div className="flex animate-scroll whitespace-nowrap gap-4 py-2 hover:[animation-play-state:paused]">
                  {[1, 2, 3].map((_, i) => (
                    <React.Fragment key={i}>
                      <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all shrink-0 w-40 cursor-pointer">
                        <Globe className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <div className="font-semibold text-slate-900">AWS</div>
                      </motion.div>
                      <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all shrink-0 w-40 cursor-pointer">
                        <Cloud className="w-8 h-8 text-red-500 mx-auto mb-3" />
                        <div className="font-semibold text-slate-900">Google Cloud</div>
                      </motion.div>
                      <motion.div whileHover={{ y: -5, scale: 1.05 }} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all shrink-0 w-48 cursor-pointer">
                        <Database className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                        <div className="font-semibold text-slate-900">Microsoft Azure</div>
                      </motion.div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-slate-900 rounded-2xl p-6 text-white cursor-pointer shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Network className="text-cyan-400" />
                  <h4 className="font-semibold">Secure Network Design</h4>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    className="bg-cyan-400 h-2 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-xs text-slate-400 text-right">Reliability Score</p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


export { CloudSection };
