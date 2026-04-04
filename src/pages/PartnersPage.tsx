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
import { Solutions } from '../components/sections/Solutions';
import { Footer } from '../components/layout/Footer';
import { Partners } from '../components/sections/Partners';

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const partners = [
    {
      id: "aws",
      name: "AWS",
      tier: "Advanced Consulting Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      headerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      description: "We help organizations architect, migrate, and manage their workloads on AWS, leveraging cloud-native services for maximum scalability and innovation.",
      certifications: ["Migration Competency", "Security Competency", "Well-Architected Partner"],
      solutions: ["Cloud Migration", "Serverless Architecture", "Cost Optimization"],
      color: "from-[#ff9900]/80 to-[#232f3e]/90",
      accent: "text-[#ff9900]"
    },
    {
      id: "google-cloud",
      name: "Google Cloud",
      tier: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      headerImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
      description: "Accelerate your digital transformation with Google Cloud's secure, open, and intelligent enterprise cloud platform.",
      certifications: ["Cloud Architecture", "Data Engineering", "Machine Learning"],
      solutions: ["Data Analytics", "Kubernetes Modernization", "Workspace Integration"],
      color: "from-[#4285F4]/80 to-[#34A853]/90",
      accent: "text-[#4285F4]"
    },
    {
      id: "azure",
      name: "Azure",
      tier: "Gold Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
      headerImage: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=1200&auto=format&fit=crop",
      description: "Deliver best-in-class cloud solutions, modern workplace transformations, and enterprise-grade security using the full Microsoft Azure ecosystem.",
      certifications: ["Azure Expert MSP", "Cloud Productivity", "Security"],
      solutions: ["Azure Infrastructure", "Hybrid Cloud", "AI & Cognitive Services"],
      color: "from-[#00a4ef]/80 to-[#0078d4]/90",
      accent: "text-[#00a4ef]"
    },
    {
      id: "cisco",
      name: "Cisco",
      tier: "Premier Certified Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
      headerImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
      description: "Build resilient, high-performance networks and implement zero-trust security architectures for modern enterprises.",
      certifications: ["Advanced Enterprise Networks", "Advanced Security", "Collaboration"],
      solutions: ["SD-WAN Deployment", "Network Security", "Unified Communications"],
      color: "from-[#049fd9]/80 to-[#005073]/90",
      accent: "text-[#049fd9]"
    },
    {
      id: "hp",
      name: "HP",
      tier: "Platinum Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
      headerImage: "https://images.unsplash.com/photo-1531297172868-9f1d1b5380f2?q=80&w=1200&auto=format&fit=crop",
      description: "Empower your workforce with HP's secure, high-performance computing solutions and enterprise printing infrastructure.",
      certifications: ["Device as a Service (DaaS)", "Endpoint Security", "Managed Print"],
      solutions: ["Workforce Provisioning", "Endpoint Security", "Hybrid Work Solutions"],
      color: "from-[#0096D6]/80 to-[#007DBA]/90",
      accent: "text-[#0096D6]"
    },
    {
      id: "fortinet",
      name: "Fortinet",
      tier: "Expert Partner",
      logo: "https://logo.uplead.com/fortinet.com",
      headerImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
      description: "Deliver top-tier cybersecurity solutions, protecting your network edge, data center, and cloud environments.",
      certifications: ["Network Security Expert (NSE)", "Secure SD-WAN", "Cloud Security"],
      solutions: ["Next-Gen Firewalls", "Secure Access Service Edge (SASE)", "Endpoint Protection"],
      color: "from-[#c8102e]/80 to-[#8a0b20]/90",
      accent: "text-[#c8102e]"
    },
    {
      id: "aruba",
      name: "Aruba",
      tier: "Platinum Partner",
      logo: "https://logo.uplead.com/arubanetworks.com",
      headerImage: "https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1200&auto=format&fit=crop",
      description: "Create smart, secure, and seamless network experiences with Aruba's edge-to-cloud solutions.",
      certifications: ["ClearPass Policy Management", "Wireless Networking", "SD-Branch"],
      solutions: ["Wi-Fi 6/6E Deployment", "Network Access Control", "Location Services"],
      color: "from-[#FF8300]/80 to-[#E57300]/90",
      accent: "text-[#FF8300]"
    },
    {
      id: "meraki",
      name: "Meraki",
      tier: "Solutions Partner",
      logo: "https://meraki.cisco.com/wp-content/uploads/2020/04/cisco-meraki-logo-1024x200.png",
      headerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      description: "Simplify IT with Cisco Meraki's cloud-managed IT solutions, from wireless and switching to security and MDM.",
      certifications: ["Cloud Managed Networks", "Meraki Security", "IoT Solutions"],
      solutions: ["Cloud-Managed Wi-Fi", "Full-Stack Meraki", "Smart Cameras & Sensors"],
      color: "from-[#78BE20]/80 to-[#5E9719]/90",
      accent: "text-[#78BE20]"
    },
    {
      id: "huawei",
      name: "Huawei",
      tier: "Enterprise Partner",
      logo: "https://logo.uplead.com/huawei.com",
      headerImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop",
      description: "Drive digital transformation with Huawei's comprehensive portfolio of enterprise infrastructure and smart devices.",
      certifications: ["Datacom", "Storage", "Transmission"],
      solutions: ["Campus Networks", "All-Flash Storage", "Data Center Facilities"],
      color: "from-[#E61D2B]/80 to-[#C8102E]/90",
      accent: "text-[#E61D2B]"
    },
    {
      id: "vst-ecs",
      name: "VST ECS",
      tier: "Strategic Distributor",
      logo: "",
      headerImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      description: "Leverage our strategic distribution partnership with VST ECS for streamlined procurement and supply chain efficiency.",
      certifications: ["Value-Added Distribution", "Enterprise Systems", "Cloud Provisioning"],
      solutions: ["Hardware Procurement", "Software Licensing", "Logistics & Integration"],
      color: "from-[#0055A5]/80 to-[#003366]/90",
      accent: "text-[#0055A5]"
    },
    {
      id: "bytestraits",
      name: "ByteStraits",
      tier: "Technology Partner",
      logo: "https://bytestraits.com.my/wp-content/uploads/2026/03/cropped-byteslogo.jpeg",
      headerImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      description: "Partnering with ByteStraits to deliver cutting-edge software development and digital innovation services.",
      certifications: ["Custom Software Development", "Agile Methodologies", "UI/UX Design"],
      solutions: ["Web Applications", "Mobile App Development", "Digital Transformation"],
      color: "from-[#6366F1]/80 to-[#4F46E5]/90",
      accent: "text-[#6366F1]"
    },
    {
      id: "agmo-studio",
      name: "Agmo Studio",
      tier: "Digital Solutions Partner",
      logo: "",
      headerImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      description: "Collaborating with Agmo Studio to build award-winning mobile and web solutions tailored to your business needs.",
      certifications: ["Mobile Engineering", "Blockchain Solutions", "AR/VR Development"],
      solutions: ["Enterprise Mobility", "Emerging Tech Integration", "Bespoke Software"],
      color: "from-[#F59E0B]/80 to-[#D97706]/90",
      accent: "text-[#F59E0B]"
    }
  ];

  // Interactive Card Component with Mouse Tracking
  const PartnerCard = ({ partner, onClick }: { partner: any, onClick: () => void }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = React.useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="relative p-8 rounded-3xl bg-white border border-slate-200 cursor-pointer overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      >
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`
          }}
        />
        
        <div className="relative z-10 flex-grow flex flex-col">
          <div className="h-20 flex items-center justify-start mb-6">
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name} className="max-h-12 max-w-[160px] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            ) : (
              <div className={`text-2xl font-black tracking-tight ${partner.accent} grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}>{partner.name}</div>
            )}
          </div>
          
          <div className="mt-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-wide mb-4 group-hover:bg-cyan-50 group-hover:text-cyan-700 transition-colors">
              <Award className="w-3.5 h-3.5" />
              {partner.tier}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{partner.name}</h3>
            <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed">
              {partner.description}
            </p>
            
            <div className="mt-6 flex items-center text-sm font-medium text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              View Partnership Details <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-20 bg-white min-h-screen text-slate-900 selection:bg-cyan-500/30">
      {/* Hero Section */}
      <div className="relative py-32 lg:py-48 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Partners Background" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white"></div>
        </div>

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
                <Handshake className="w-4 h-4" />
                GLOBAL ALLIANCES
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Our Strategic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 animate-gradient-x">
                  Partnerships
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                We collaborate with industry-leading technology providers to deliver unparalleled solutions, ensuring your business stays ahead of the curve.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>

      {/* Interactive Partner Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">The Innov8 Ecosystem</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Click on any partner to explore our joint capabilities, certifications, and specialized solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <FadeIn key={partner.id} delay={index * 0.1} direction="up">
                <PartnerCard partner={partner} onClick={() => setSelectedPartner(partner)} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0, rotateX: 15, y: 50 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -15, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] perspective-1000"
            >
              {/* Animated Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedPartner.color} opacity-20 blur-xl pointer-events-none`} />

              {/* Close Button (Fixed) */}
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPartner(null)}
                className="absolute top-6 right-6 p-2.5 bg-black/10 rounded-full backdrop-blur-md transition-colors text-white z-50"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="flex-grow overflow-y-auto flex flex-col relative z-10 bg-white/90 backdrop-blur-sm">
                {/* Header with Animated Gradient & Moving Grid */}
                <motion.div 
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                  className={`h-48 w-full bg-gradient-to-r ${selectedPartner.color} bg-[length:200%_200%] relative overflow-hidden flex-shrink-0`}
                  style={{
                    backgroundImage: selectedPartner.headerImage ? `url(${selectedPartner.headerImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay to ensure gradient colors still show through somewhat and text is readable */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${selectedPartner.color}`}></div>
                  
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                  
                  {/* Moving Grid Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Decorative animated circles */}
                  <motion.div 
                    animate={{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/20 blur-3xl"
                  />
                  <motion.div 
                    animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-10 right-20 w-40 h-40 rounded-full bg-white/20 blur-3xl"
                  />
                </motion.div>
                
                {/* Body */}
                <div className="px-8 sm:px-12 pb-10 flex-grow">
                  {/* Logo overlapping header */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-end -mt-20 sm:-mt-24 mb-8 relative z-20">
                    <motion.div 
                      initial={{ y: 40, opacity: 0, rotateY: -30 }}
                      animate={{ y: [0, -8, 0], opacity: 1, rotateY: 0 }}
                      transition={{ 
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.5 },
                        rotateY: { duration: 0.5 }
                      }}
                      whileHover={{ scale: 1.05, rotateY: 10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
                      className="w-36 h-36 bg-white rounded-[2rem] shadow-xl flex items-center justify-center p-6 border border-slate-100 flex-shrink-0 transition-all duration-300 relative group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${selectedPartner.color} opacity-0 group-hover:opacity-10 rounded-[2rem] transition-opacity duration-300`} />
                      {selectedPartner.logo ? (
                        <img src={selectedPartner.logo} alt={selectedPartner.name} className="max-w-full max-h-full object-contain relative z-10" />
                      ) : (
                        <div className={`text-xl sm:text-2xl font-black tracking-tight text-center break-words w-full leading-tight relative z-10 ${selectedPartner.accent}`}>{selectedPartner.name}</div>
                      )}
                    </motion.div>
                    <motion.div 
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring", damping: 20 }}
                      className="flex flex-col gap-3 pb-3"
                    >
                      <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 sm:text-white tracking-tight drop-shadow-md">{selectedPartner.name}</h2>
                      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold tracking-wide shadow-sm w-fit ${selectedPartner.accent}`}>
                        <Award className="w-4 h-4" />
                        {selectedPartner.tier}
                      </div>
                    </motion.div>
                  </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-slate-600 leading-relaxed mb-10 max-w-3xl"
                >
                  {selectedPartner.description}
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Certifications */}
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-20 pointer-events-none" />
                    
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${selectedPartner.color} opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-10`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedPartner.color} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md`}>
                      <BadgeCheck className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">
                      Our Certifications
                    </h4>
                    <ul className="space-y-4 relative z-10">
                      {selectedPartner.certifications.map((cert: string, i: number) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          key={i} 
                          className="flex items-start gap-3 text-slate-700 font-medium group/item relative overflow-hidden p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className={`mt-1 p-1 rounded-full bg-gradient-to-br ${selectedPartner.color} bg-opacity-20 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all`}>
                            <CheckCircle2 className={`w-4 h-4 ${selectedPartner.accent}`} />
                          </div>
                          <span className="group-hover/item:text-slate-900 transition-colors relative z-10">{cert}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Solutions */}
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-20 pointer-events-none" />

                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${selectedPartner.color} opacity-5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-10`} />
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedPartner.color} flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md`}>
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">
                      Joint Solutions
                    </h4>
                    <ul className="space-y-4 relative z-10">
                      {selectedPartner.solutions.map((sol: string, i: number) => (
                        <motion.li 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          key={i} 
                          className="flex items-start gap-3 text-slate-700 font-medium group/item relative overflow-hidden p-2 -ml-2 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className={`mt-2 w-2 h-2 rounded-full bg-current ${selectedPartner.accent} group-hover/item:scale-[2] group-hover/item:shadow-[0_0_10px_currentColor] transition-all duration-300`} />
                          <span className="group-hover/item:text-slate-900 transition-colors relative z-10">{sol}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 sm:px-12 bg-slate-50 border-t border-slate-100 flex justify-end flex-shrink-0">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPartner(null)}
                  className="px-8 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-xl transition-all"
                >
                  Close Details
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Value Proposition */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.4)_0,transparent_100%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Our Partnerships Matter</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Our elite partner status isn't just a badge—it translates directly into tangible benefits for your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Priority Support", desc: "Direct escalation paths to vendor engineering teams for rapid issue resolution." },
                { title: "Advanced Expertise", desc: "Our engineers hold the highest level of certifications, ensuring flawless execution." },
                { title: "Exclusive Pricing", desc: "Leverage our purchasing power for competitive pricing and special project funding." }
              ].map((benefit, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Leverage Our Network</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Ready to harness the power of industry-leading technologies? Contact us to discuss how our partnerships can accelerate your business.
            </p>
            <Link 
              to="/contact"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-xl transition-all"
              >
                Contact Our Team
              </motion.button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};


export { PartnersPage };
