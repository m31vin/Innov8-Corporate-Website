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
import { Hero } from '../components/sections/Hero';
import { Deployment } from '../components/sections/Deployment';

const DeploymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const deploymentSteps = [
    {
      title: "Assessment & Planning",
      icon: <Target className="w-6 h-6" />,
      description: "We begin with a comprehensive analysis of your current infrastructure, identifying bottlenecks and defining a clear roadmap for deployment.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Procurement & Staging",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Leveraging our vendor partnerships, we procure the necessary hardware and stage it in our secure facilities for pre-configuration.",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Configuration & Testing",
      icon: <Code className="w-6 h-6" />,
      description: "Every device is imaged, configured with your corporate policies, and rigorously tested to ensure zero-defect deployment.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Rollout & Integration",
      icon: <Zap className="w-6 h-6" />,
      description: "Our field engineers execute a seamless rollout, integrating new hardware into your environment with minimal disruption to daily operations.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-cyan-500/30">
      {/* Cinematic Hero */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
            alt="Deployment Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
        </div>

        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] z-0"
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
                PRECISION EXECUTION
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Flawless Technology <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-gradient-x">
                  Deployment
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                From procurement to rollout, we orchestrate complex hardware and network deployments with military precision.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Interactive Deployment Process */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Deployment Lifecycle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A proven methodology ensuring zero-downtime integration of new technology.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-4">
              {deploymentSteps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                    activeStep === index 
                      ? 'bg-white border-cyan-500 shadow-md' 
                      : 'bg-white border-slate-200 hover:bg-slate-50 hover:shadow-sm'
                  }`}
                >
                  {activeStep === index && (
                    <motion.div 
                      layoutId="activeStepIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      activeStep === index ? 'bg-cyan-50 text-cyan-600' : 'bg-slate-100 text-slate-500 group-hover:text-slate-700'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-cyan-600 mb-1">STEP 0{index + 1}</div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        activeStep === index ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Step Content */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={deploymentSteps[activeStep].image} 
                      alt={deploymentSteps[activeStep].title}
                      className="w-full h-full object-cover opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{deploymentSteps[activeStep].title}</h3>
                        <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                          {deploymentSteps[activeStep].description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Deploy?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Let's discuss how our deployment services can accelerate your technology initiatives and ensure a seamless rollout.
            </p>
            <Link 
              to="/contact"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Our Deployment Team
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export { DeploymentPage };
