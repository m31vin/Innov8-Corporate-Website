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

const ServicesContent = () => {
  const detailedServices = [
    {
      title: "Managed IT Infrastructure",
      icon: <Server className="w-8 h-8" />,
      description: "End-to-end management of your IT environment. We ensure high availability, proactive monitoring, and rapid issue resolution.",
      features: ["24/7 Monitoring", "Proactive Maintenance", "Helpdesk Support", "Network Optimization"]
    },
    {
      title: "Cloud Migration & Management",
      icon: <Cloud className="w-8 h-8" />,
      description: "Seamlessly transition to the cloud. We design, execute, and manage scalable cloud architectures on AWS, Azure, and Google Cloud.",
      features: ["Cloud Readiness Assessment", "Zero-Downtime Migration", "Cost Optimization", "Multi-Cloud Strategies"]
    },
    {
      title: "Enterprise Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Protect your digital assets with military-grade security protocols, continuous threat detection, and compliance management.",
      features: ["Threat Intelligence", "Vulnerability Assessments", "Zero Trust Architecture", "Compliance (SOC2, HIPAA)"]
    },
    {
      title: "Custom Software & AI",
      icon: <Code className="w-8 h-8" />,
      description: "Tailored applications and AI integrations designed to automate workflows and provide a competitive edge in your industry.",
      features: ["Full-Stack Development", "API Integration", "Machine Learning Models", "Legacy System Modernization"]
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {detailedServices.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-slate-50 border border-slate-100 p-10 rounded-3xl h-full hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-100 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-blue-50/0 group-hover:from-cyan-50/50 group-hover:to-blue-50/50 transition-colors duration-500 z-0"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};


export { ServicesContent };
