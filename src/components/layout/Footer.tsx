import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Cpu className="text-cyan-500 w-6 h-6" />
            <span className="text-xl font-bold text-white">Innov8</span>
          </div>
          
          <div className="text-sm text-center md:text-left">
            &copy; 2026 Innov8 IT Solutions. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="mailto:innov8its@innov8.net.ph" className="hover:text-cyan-400 transition-colors">innov8its@innov8.net.ph</a>
            <span>·</span>
            <span>Caloocan City</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


export { Footer };
