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
import { ContactSection } from '../components/sections/ContactSection';
import { FAQItem } from '../components/ui/FAQItem';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Contact Hero */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Conversation</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Whether you're looking to deploy new infrastructure, migrate to the cloud, or optimize your business systems, our team of experts is ready to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Contact Section (Form + Info) */}
      <ContactSection />

      {/* Map & Additional Info Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Headquarters</h2>
              <p className="text-slate-600 mb-8 text-lg">
                We're located in the heart of Caloocan City. Drop by for a coffee and let's discuss how we can transform your IT infrastructure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Global Support</h4>
                    <p className="text-slate-600">24/7 Remote IT Support available for enterprise clients.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <iframe 
                src="https://maps.google.com/maps?q=258%20M.%20Cleofas%20St.,%20Brgy%20162,%20Caloocan%20City&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Innov8 Headquarters Location"
              ></iframe>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Quick answers to common questions about working with us.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What industries do you specialize in?", a: "We work across various sectors including finance, healthcare, retail, and manufacturing, providing tailored IT solutions for each industry's unique compliance and operational needs." },
              { q: "Do you offer 24/7 support?", a: "Yes, our enterprise managed services include 24/7/365 monitoring and remote support to ensure your critical systems are always operational." },
              { q: "How long does a typical cloud migration take?", a: "Migration timelines vary greatly depending on the complexity of your infrastructure. A simple lift-and-shift might take a few weeks, while a full cloud-native refactor could take several months. We provide detailed timelines during the assessment phase." },
              { q: "Can you help procure hardware?", a: "Absolutely. Through our partnerships with major vendors like Dell, HP, and Cisco, we can handle procurement, staging, and deployment of all your hardware needs." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export { ContactPage };
