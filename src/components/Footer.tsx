import { motion } from "framer-motion";
import { Heart, Code, Palette, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  const eventCategories = [
    "Technical Events",
    "Cultural Events", 
    "Creative Competitions",
    "E-Sports Tournaments",
    "Quiz Competitions",
  ];

  const sponsors = [
    "Tech Corp Solutions",
    "Innovation Labs",
    "Digital Dynamics",
    "Future Systems",
    "AI Research Group",
    "CodeCraft Studios",
  ];

  return (
    <footer className="relative mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative glass-strong border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-3xl font-orbitron font-bold text-gradient">
                  LuMInA
                </div>
                <div className="text-lg font-inter text-muted-foreground">
                  2K25
                </div>
              </div>
              <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                Where Culture Meets Code - An extraordinary celebration of technology, 
                creativity, and innovation organized by the Department of AI & ML.
              </p>
              <div className="flex items-center gap-2 text-sm font-inter">
                
                
                <span className="text-muted-foreground">by AI & ML Department</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-orbitron font-semibold text-gradient mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="font-inter text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Event Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-orbitron font-semibold text-gradient mb-6">
                Event Categories
              </h3>
              <ul className="space-y-3">
                {eventCategories.map((category) => (
                  <li key={category} className="font-inter text-muted-foreground text-sm">
                    {category}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-orbitron font-semibold text-gradient mb-6">
                Connect With Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-inter">lumina2k25@college.edu</span>
                </div>
                
                <div className="flex gap-3">
                  {["📸", "💼", "🐦", "📺"].map((icon, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-glow cursor-pointer transition-all duration-300 hover:scale-110"
                    >
                      <span className="text-lg">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

         

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ {once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-primary/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm font-inter text-muted-foreground">
                <span>© {currentYear} LuMInA 2K25. All rights reserved.</span>
                
              </div>
              
              <div className="flex items-center gap-4 text-sm font-inter text-muted-foreground">
                <span>Department of AI & ML</span>
                <span>|</span>
                <span>St' Martins Engineering Collage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
