import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';
import { Hero } from '../components/sections/Hero';
import { Pillars } from '../components/sections/Pillars';
import { About } from '../components/sections/About';
import { Deployment } from '../components/sections/Deployment';
import { CloudSection } from '../components/sections/CloudSection';
import { Solutions } from '../components/sections/Solutions';
import { ContactSection } from '../components/sections/ContactSection';
import { Partners } from '../components/sections/Partners';

const HomePage = () => (
  <>
    <Hero />
    <Pillars />
    <About />
    <Deployment />
    <CloudSection />
    <Solutions />
    <Partners />
    <ContactSection />
  </>
);


export { HomePage };
