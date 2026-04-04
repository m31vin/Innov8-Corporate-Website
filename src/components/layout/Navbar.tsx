import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Deployment', href: '/deployment' },
    { name: 'Cloud & IT', href: '/cloud' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full relative">
          {/* Logo (Left) */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 z-10 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-slate-900'}`}>
              Innov8
            </span>
          </Link>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10 w-max">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const activeClass = isScrolled ? 'text-cyan-400' : 'text-blue-600';
                const inactiveClass = isScrolled ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600';
                
                return (
                  <Link key={link.name} to={link.href} className={`text-sm font-semibold transition-colors ${isActive ? activeClass : inactiveClass}`}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Nav Links (Tablet/Small Desktop fallback) */}
          <div className="hidden lg:flex xl:hidden items-center justify-center flex-1 px-8 z-10">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const activeClass = isScrolled ? 'text-cyan-400' : 'text-blue-600';
                const inactiveClass = isScrolled ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600';
                
                return (
                  <Link key={link.name} to={link.href} className={`text-sm font-semibold transition-colors ${isActive ? activeClass : inactiveClass}`}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Buttons (Right) */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            <Link to="/contact" className={`px-5 py-2.5 rounded-lg font-bold transition-all text-sm whitespace-nowrap ${isScrolled ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}>
              Partner With Us
            </Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-600/30 text-sm whitespace-nowrap">
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden z-10">
            <button 
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-200'}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const activeClass = 'text-cyan-400 bg-slate-800';
                const inactiveClass = 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800';
                
                return (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className={`block px-3 py-3 text-base font-medium rounded-lg ${isActive ? activeClass : inactiveClass}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-800">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-5 py-3 rounded-lg bg-white text-slate-900 font-bold">
                  Partner With Us
                </Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-5 py-3 rounded-lg bg-blue-500 text-white font-bold">
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


export { Navbar };
