import { motion } from "framer-motion";
import { Mail, Phone, MapPin, User, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const facultyCoordinators = [
    {
      name: "Mr. B. Ramesh",
      designation: "Assistant Proffessor, Dept. of AI & ML",
      phone: "+91 98667 46284",
      image: "👨‍🏫"
    },
  ];

  const studentCoordinators = [
    {
      name: "P. Sushanth",
      designation: "Event Head & Final Year AI & ML",
      phone: "+91 79935 72969",
      image: "👨‍🏫" 
    },
    {
      name: "V. Keerthi",
      designation: "Event Head & Final Year AI & ML",
      phone: "+91 79930 66231",
      image: "👩‍🏫"
    },
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@lumina2k25",
      url: "https://instagram.com/lumina2k25",
      icon: "📸",
      followers: "2.5K",
    }, 
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-orbitron font-bold mb-6 text-gradient">
              Get in Touch
            </h1>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              Have questions about LuMInA 2K25? Need assistance with registration? 
              Our team is here to help you make the most of this incredible experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-8 rounded-2xl border border-primary/30 mb-16"
          >
            <h2 className="text-3xl font-orbitron font-bold text-gradient mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input id="contact-name" placeholder="Your full name" className="glass" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your.email@example.com" className="glass" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input id="contact-phone" placeholder="Your phone number" className="glass" />
                </div>
                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input id="contact-subject" placeholder="What's this about?" className="glass" />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea 
                  id="contact-message" 
                  placeholder="Tell us how we can help you..." 
                  className="glass min-h-[120px]" 
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">
              Faculty Coordinators
            </h2>
            <p className="text-lg font-inter text-muted-foreground">
              Meet our dedicated faculty members overseeing LuMInA 2K25
            </p>
          </motion.div>

          <div className="flex justify-center gap-8 mb-16">
            {facultyCoordinators.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-strong p-6 rounded-xl hover-glow border border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                    {faculty.image}
                  </div>
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-gradient">
                      {faculty.name}
                    </h3>
                    <p className="text-sm font-inter text-muted-foreground">
                      {faculty.designation}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-inter">{faculty.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Coordinators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">
              Student Coordinators
            </h2>
            <p className="text-lg font-inter text-muted-foreground">
              Your go-to team for event-specific queries and assistance
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {studentCoordinators.map((student, index) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-glow border border-secondary/20 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl mx-auto mb-3">
                  {student.image}
                </div>
                <h3 className="text-lg font-orbitron font-bold text-gradient mb-1">
                  {student.name}
                </h3>
                <p className="text-xs font-inter text-muted-foreground mb-2">
                  {student.designation}
                </p>
                <div className="text-xs font-inter text-secondary mb-3">
                  {student.department}
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-center gap-1">
                    <Phone className="w-3 h-3 text-primary" />
                    <span className="font-inter">{student.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold text-gradient mb-4">
              Follow Us
            </h2>
            <p className="text-lg font-inter text-muted-foreground">
              Stay updated with the latest announcements and behind-the-scenes content
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-glow border border-primary/20 text-center group transition-all duration-300"
              >
                <div className="text-3xl mb-3">{social.icon}</div>
                <h3 className="font-orbitron font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                  {social.platform}
                </h3>
                <p className="text-sm font-inter text-muted-foreground mb-2">
                  {social.handle}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-secondary">
                  <Users className="w-3 h-3" />
                  <span className="font-inter">{social.followers}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-primary mt-2 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-8 rounded-2xl border border-primary/30 text-center"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-orbitron font-bold text-gradient mb-4">
              Event Venue
            </h3>
            <div className="space-y-2 text-lg font-inter text-muted-foreground mb-6">
              <p>Department of Artificial Intelligence & Machine Learning</p>
              <p>St'Martins Engineering Collage</p>
              <p>Dhulapally Road, Near Kompally, Medchal–Malkajgiri district. Secunderabad-500 100</p>
              <p>Telangana, India</p>
            </div>
            <Button variant="neon" asChild>
              <a 
                href="https://maps.app.goo.gl/UQxQhWSpm9pi6UAS7?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
