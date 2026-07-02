"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Stethoscope, 
  Cpu, 
  Users, 
  Globe, 
  Calendar, 
  TrendingUp,
  Heart,
  Brain,
  Microscope,
  Activity,
  Shield,
  Database,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Github,
  Youtube,
  Twitter
} from "lucide-react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration }}
      className="text-5xl font-bold text-white"
    >
      {end}+
    </motion.div>
  );
}

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-700/30 rounded-lg overflow-hidden bg-blue-900/10 backdrop-blur-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-800/20 transition"
      >
        <span className="text-white font-medium">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-blue-400" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="px-6 pb-4 text-gray-300"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

// SED Logo Component
function SEDLogo() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative w-12 h-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full opacity-80"></div>
        <div className="absolute inset-1 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="flex gap-1">
            <Stethoscope className="w-5 h-5 text-white" />
            <Cpu className="w-5 h-5 text-white" />
          </div>
        </div>
      </motion.div>
      <div>
        <h1 className="text-xl font-bold text-white">SED</h1>
        <p className="text-xs text-blue-300">Society of Engineers & Doctors</p>
      </div>
    </div>
  );
}

export default function SEDPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    profession: "",
    organization: "",
    country: "",
    linkedin: "",
    interests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for joining SED! We'll be in touch soon.");
  };

  const focusAreas = [
    "Artificial Intelligence", "Healthcare AI", "Medical Imaging", "Robotics",
    "Biomedical Engineering", "Digital Health", "Telemedicine", "Cloud Computing",
    "Cybersecurity", "Data Science", "Health Informatics", "Medical Devices",
    "Internet of Things (IoT)", "Wearables", "Clinical Decision Support Systems",
    "Machine Learning", "Research", "Open Source Healthcare"
  ];

  const communityActivities = [
    { icon: Calendar, title: "Monthly Webinars" },
    { icon: MessageSquare, title: "Technical Talks" },
    { icon: Heart, title: "Medical Case Discussions" },
    { icon: Cpu, title: "Engineering Solution Reviews" },
    { icon: Microscope, title: "Research Paper Discussions" },
    { icon: Users, title: "Student Mentorship" },
    { icon: Github, title: "Open Source Projects" },
    { icon: TrendingUp, title: "Hackathons" },
    { icon: Globe, title: "Conferences" },
    { icon: Activity, title: "Innovation Challenges" }
  ];

  const faqData = [
    {
      question: "What is SED?",
      answer: "SED (Society of Engineers & Doctors) is a global professional community dedicated to bringing together medical professionals, engineers, researchers, innovators, and students to bridge the gap between medicine and engineering."
    },
    {
      question: "Who can join?",
      answer: "SED welcomes doctors, engineers, researchers, students, healthcare professionals, AI experts, and anyone interested in the intersection of medicine and technology."
    },
    {
      question: "Is membership free?",
      answer: "Yes, basic membership to SED is free. We offer various membership tiers with different benefits for professionals, students, and organizations."
    },
    {
      question: "Can students join?",
      answer: "Absolutely! Students are a vital part of our community. We offer special programs, mentorship opportunities, and resources specifically for students."
    },
    {
      question: "Can researchers collaborate?",
      answer: "Yes! SED facilitates research collaboration through our platform, connecting researchers from different disciplines to work on interdisciplinary healthcare projects."
    },
    {
      question: "How can I volunteer?",
      answer: "You can volunteer by joining our organizing committee, contributing to open-source projects, mentoring students, organizing events, or creating content for our community."
    }
  ];

  return (
    <main 
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{
        backgroundImage: 'url("/sed1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/35 to-blue-900/40 pointer-events-none"></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/90 backdrop-blur-md border-b border-blue-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <SEDLogo />
          <div className="hidden md:flex gap-6 lg:gap-8">
            <a href="#home" className="text-white hover:text-blue-300 transition text-sm lg:text-base">Home</a>
            <a href="#mission" className="text-white hover:text-blue-300 transition text-sm lg:text-base">About</a>
            <a href="#projects" className="text-white hover:text-blue-300 transition text-sm lg:text-base">Projects</a>
            <a href="#events" className="text-white hover:text-blue-300 transition text-sm lg:text-base">Events</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition text-sm lg:text-base">Contact</a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition text-sm sm:text-base"
          >
            Join Now
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Society of Engineers & Doctors
            </h1>
            <h2 className="text-xl sm:text-2xl text-blue-300 mb-4 sm:mb-6 font-semibold">
              Where Medicine Meets Engineering
            </h2>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
              Connecting doctors, engineers, researchers, students, healthcare professionals, AI experts, and innovators to solve real-world healthcare challenges through collaboration, research, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition text-sm sm:text-base"
              >
                Join the Community
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 rounded-full font-semibold transition text-sm sm:text-base"
              >
                Learn More
              </motion.button>
              <a
                href="https://www.linkedin.com/in/cptvinod/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition text-sm sm:text-base"
              >
                <Linkedin className="w-5 h-5" />
                Follow on LinkedIn
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-700/30 to-green-700/30 rounded-3xl backdrop-blur-sm border border-blue-500/30 flex items-center justify-center overflow-hidden">
              {/* Animated Background Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-48 h-48 bg-green-500/20 rounded-full blur-3xl"
              />
              
              {/* Central Illustration */}
              <div className="relative z-10 flex gap-4 sm:gap-8">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="w-20 h-20 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 sm:mb-4 border border-white/20">
                    <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <p className="text-white font-medium text-xs sm:text-sm md:text-base">Doctors</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 sm:mb-4 border border-white/20">
                    <Cpu className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <p className="text-white font-medium text-xs sm:text-sm md:text-base">Engineers</p>
                </motion.div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -30, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, 30, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
              >
                <Microscope className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2"
          >
            The Society of Engineers & Doctors (SED) is a global professional community dedicated to bringing together medical professionals, engineers, researchers, innovators, and students.
            <br /><br />
            Our mission is to bridge the gap between medicine and engineering by encouraging collaboration, knowledge sharing, interdisciplinary research, and technology-driven healthcare innovation.
            <br /><br />
            We believe that the future of healthcare depends on experts from multiple disciplines working together to create better solutions for patients worldwide.
          </motion.p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Why Join SED
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Knowledge Sharing", desc: "Learn from doctors, engineers, AI researchers, and healthcare experts.", icon: MessageSquare },
              { title: "Networking", desc: "Connect with professionals from around the world.", icon: Users },
              { title: "Research Collaboration", desc: "Collaborate on interdisciplinary research and innovation.", icon: Microscope },
              { title: "Healthcare Innovation", desc: "Build solutions using AI, robotics, cloud computing, IoT, and biomedical engineering.", icon: Cpu },
              { title: "Events", desc: "Participate in webinars, workshops, hackathons, and conferences.", icon: Calendar },
              { title: "Career Growth", desc: "Discover mentorship, internships, research opportunities, and career guidance.", icon: TrendingUp }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Focus Areas
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
                className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-2 sm:p-3 md:p-4 text-center hover:border-blue-400 transition cursor-pointer"
              >
                <p className="text-white text-xs sm:text-sm font-medium">{area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Community Activities
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {communityActivities.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <activity.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <p className="text-white text-xs sm:text-sm font-medium">{activity.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Featured Projects
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "AI Doctor", desc: "AI-powered medical assistant using LLMs and RAG.", icon: Brain },
              { title: "Smart Medical Devices", desc: "Affordable and accessible healthcare devices.", icon: Activity },
              { title: "Healthcare Analytics", desc: "AI-driven predictive healthcare analytics.", icon: Database },
              { title: "Medical Robotics", desc: "Automation and robotic assistance for healthcare.", icon: Cpu }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <project.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Latest Articles
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "AI in Healthcare",
              "Future of Medical Robotics",
              "Digital Health Transformation",
              "Medical Imaging using Deep Learning",
              "Cloud Computing for Hospitals",
              "Cybersecurity in Healthcare"
            ].map((article, i) => (
              <motion.div
                key={article}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl overflow-hidden hover:bg-white/15 transition cursor-pointer"
              >
                <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                  <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/50" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{article}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    Explore the latest insights and developments in {article.toLowerCase()}.
                  </p>
                  <button className="text-blue-300 hover:text-blue-200 font-medium text-xs sm:text-sm">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Upcoming Events
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Webinar", date: "Jan 15, 2026", time: "3:00 PM IST", speaker: "Dr. Sarah Chen" },
              { title: "Workshop", date: "Jan 20, 2026", time: "10:00 AM IST", speaker: "Prof. James Wilson" },
              { title: "Hackathon", date: "Feb 5-7, 2026", time: "48 Hours", speaker: "SED Team" },
              { title: "Research Meetup", date: "Feb 15, 2026", time: "4:00 PM IST", speaker: "Dr. Michael Brown" },
              { title: "Healthcare Summit", date: "Mar 10, 2026", time: "9:00 AM IST", speaker: "Industry Leaders" }
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 sm:p-6 hover:bg-white/15 transition cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
                  <span className="text-blue-300 font-medium text-xs sm:text-sm">{event.date}</span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2">{event.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{event.time}</p>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">Speaker: {event.speaker}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base"
                >
                  Register
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Statistics */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Community Statistics
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {[
              { label: "Members", value: 5000 },
              { label: "Doctors", value: 1200 },
              { label: "Engineers", value: 1800 },
              { label: "Students", value: 1500 },
              { label: "Research Projects", value: 350 },
              { label: "Countries", value: 45 }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter end={stat.value} />
                <p className="text-gray-300 mt-2 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            What Our Members Say
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { name: "Dr. Emily Watson", profession: "Cardiologist", org: "Mayo Clinic", feedback: "SED has transformed how I approach medical research. The collaboration with engineers has led to breakthrough innovations in patient care." },
              { name: "Dr. James Liu", profession: "AI Researcher", org: "Stanford AI Lab", feedback: "The interdisciplinary nature of SED is unmatched. I've found incredible partners for my healthcare AI projects here." },
              { name: "Dr. Sarah Johnson", profession: "Biomedical Engineer", org: "MedTech Innovations", feedback: "Being part of SED opened doors to research opportunities and mentorship that accelerated my career significantly." }
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-blue-300 text-xs sm:text-sm">{testimonial.profession}</p>
                    <p className="text-gray-400 text-xs">{testimonial.org}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base">"{testimonial.feedback}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Form */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-center mb-8 sm:mb-12 text-sm sm:text-base"
          >
            Become part of the global SED community and start collaborating today.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
          >
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Full Name</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Profession</label>
              <input
                type="text"
                required
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="e.g., Doctor, Engineer, Researcher"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Organization</label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="Your organization (optional)"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="Your country"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">LinkedIn Profile</label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition text-sm sm:text-base"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>
            <div>
              <label className="block text-white mb-2 font-medium text-sm sm:text-base">Areas of Interest</label>
              <textarea
                value={formData.interests}
                onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                className="w-full bg-blue-900/50 border border-blue-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition h-20 sm:h-24 resize-none text-sm sm:text-base"
                placeholder="Tell us about your interests in healthcare and technology"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 rounded-lg font-semibold transition text-sm sm:text-base"
            >
              Join SED
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-blue-800/50">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-blue-900 border-t border-blue-700/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
            <div>
              <SEDLogo />
              <p className="text-gray-400 mt-4 text-sm">
                A global community connecting doctors, engineers, researchers, and innovators to advance healthcare through collaboration.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#mission" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-white transition">Events</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Membership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700/30 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Society of Engineers & Doctors (SED). All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      </div>
    </main>
  );
}
