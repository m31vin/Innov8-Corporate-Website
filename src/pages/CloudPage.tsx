import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, animate, useInView, useScroll, useSpring } from 'motion/react';
import { 
  Monitor, Server, Cloud, Shield, Cpu, Code, Briefcase, Users, 
  Calculator, ShoppingCart, Bot, Menu, X, Mail, Phone, MapPin, 
  CheckCircle2, ArrowRight, ChevronRight, Globe, Database, Network, ArrowUp,
  Target, Eye, Zap, Layers, TrendingUp, Lightbulb, Award, BadgeCheck, Handshake, Star, ExternalLink, Clock
} from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Hero } from '../components/sections/Hero';

const CloudPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "migration",
      title: "Cloud Architecture",
      icon: <Cloud className="w-6 h-6" />,
      description: "Seamlessly transition your workloads to the cloud. We design, build, and manage scalable cloud architectures across AWS, Azure, and Google Cloud Platform.",
      features: [
        "Multi-cloud and hybrid cloud strategies",
        "Cloud-native application modernization",
        "Serverless computing and microservices",
        "Continuous cost optimization and monitoring"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: "managed",
      title: "Managed IT Services",
      icon: <Monitor className="w-6 h-6" />,
      description: "Focus on your core business while we handle your IT operations. Our proactive managed services ensure your systems are always up, secure, and performing at their best.",
      features: [
        "24/7 proactive system monitoring and support",
        "Helpdesk and end-user technical support",
        "Patch management and system updates",
        "Backup and disaster recovery planning"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      color: "from-cyan-500 to-teal-400"
    },
    {
      id: "security",
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      description: "Protect your digital assets against evolving threats. We implement zero-trust architectures and ensure your IT environment complies with industry standards.",
      features: [
        "Zero-trust network architecture implementation",
        "Endpoint detection and response (EDR)",
        "Security awareness training for employees",
        "Compliance audits (SOC2, HIPAA, GDPR)"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      color: "from-indigo-500 to-purple-400"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-cyan-500/30">
      {/* Cinematic Hero */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Cloud Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
        </div>

        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px] z-0"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.2, 0.5, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[150px] z-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 border border-slate-200 text-cyan-600 text-sm font-medium tracking-wide mb-8 backdrop-blur-md cursor-pointer shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                NEXT-GEN INFRASTRUCTURE
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Architecting the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-gradient-x">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                Transform your business with cinematic-grade cloud solutions, unbreakable security, and intelligent managed IT.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Interactive Services Showcase */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden ${
                  activeTab === index 
                    ? 'text-white shadow-[0_0_30px_rgba(6,182,212,0.3)]' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 border border-slate-800 rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{service.icon}</span>
                <span className="relative z-10">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                {/* Text Content */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <h3 className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${services[activeTab].color}`}>
                    {services[activeTab].title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {services[activeTab].description}
                  </p>
                  <div className="space-y-4">
                    {services[activeTab].features.map((feature, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        key={i} 
                        className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors"
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${services[activeTab].color} bg-opacity-10`}>
                          <CheckCircle2 className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-slate-700 mt-1">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link to="/solutions" className="mt-10 self-start">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${services[activeTab].color} shadow-lg hover:shadow-xl transition-all`}
                    >
                      Explore Solutions
                    </motion.button>
                  </Link>
                </div>

                {/* Image Content */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={services[activeTab].image} 
                    alt={services[activeTab].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Cinematic Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/80 z-10 hidden lg:block"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 99, suffix: ".99%", label: "Uptime SLA" },
              { value: 24, suffix: "/7", label: "Proactive Monitoring" },
              { value: 100, suffix: "%", label: "Zero Trust Architecture" },
              { value: 500, suffix: "+", label: "Cloud Migrations" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-500 group cursor-default overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-4 group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                      <AnimatedCounter target={stat.value} duration={2} />{stat.suffix}
                    </div>
                    <div className="text-slate-500 font-bold tracking-widest uppercase text-xs">{stat.label}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-white z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Transform Your IT?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Partner with us to build a secure, scalable, and future-proof digital infrastructure for your enterprise.
            </p>
            <Link 
              to="/contact"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Our Cloud Experts
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export { CloudPage };
