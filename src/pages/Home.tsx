import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import ParticleBackground from "@/components/ParticleBackground";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const stats = [
    { icon: Calendar, label: "Days", value: "2", color: "text-primary" },
    { icon: Users, label: "Expected Participants", value: "500+", color: "text-secondary" },
    { icon: Trophy, label: "Prize Pool", value: "₹10K+", color: "text-primary" },
    { icon: Zap, label: "Events", value: "8+", color: "text-secondary" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="LuMInA 2K25 Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-orbitron font-black mb-6">
              <span className="text-gradient">LuMInA</span>
            </h1>
            <div className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold mb-4">
              2K25
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-inter font-light text-muted-foreground mb-2">
              Where Culture Meets Code
            </p>
            <p className="text-lg sm:text-xl font-inter text-muted-foreground">
              Department of AI & Machine Learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              variant="hero"
              size="xl"
              className="animate-glow-pulse"
            >
              <Link to="/events">View Events</Link>
            </Button>
            <Button
              asChild
              variant="neon"
              size="xl"
            >
              <Link to="/contact">Register Now</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-6 text-gradient">
              Event Highlights
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              Join us for an incredible journey where technology meets creativity in the most exciting college fest of the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass text-center p-8 rounded-xl hover-glow border border-primary/20"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4`}>
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className={`text-3xl sm:text-4xl font-orbitron font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm font-inter text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-12 rounded-2xl border border-primary/30"
          >
            <h3 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 text-gradient">
              Ready to Join the Revolution?
            </h3>
            <p className="text-xl font-inter text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of something extraordinary. Register now and experience the perfect blend of culture and technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                variant="hero"
                size="xl"
              >
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button
                asChild
                variant="glass"
                size="xl"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;