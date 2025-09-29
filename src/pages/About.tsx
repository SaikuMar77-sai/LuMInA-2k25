import { motion } from "framer-motion";
import { Code, Users, Trophy, Calendar } from "lucide-react";

const About = () => {
  const timeline = [
    {
      day: "Day 1",
      date: "October 13, 2025",
      events: [
        { time: "09:00 AM", name: "Inaugural Ceremony", venue: "Main Auditorium" },
        { time: "10:30 AM", name: "TechQuit Round 1", venue: "Lab 1" },
        { time: "02:00 PM", name: "Artify - Drawing Competition", venue: "Art Hall" },
        { time: "04:00 PM", name: "Logic League - Debate", venue: "Conference Room" },
      ],
    },
    {
      day: "Day 2",
      date: "October 14, 2025",
      events: [
        { time: "09:00 AM", name: "TechQuit Round 2 - Debugging", venue: "Lab 2" },
        { time: "11:00 AM", name: "Howzaat - Non-tech Quiz", venue: "Main Hall" },
        { time: "02:00 PM", name: "Tactical Showdown - E-Sports", venue: "Gaming Arena" },
        { time: "05:00 PM", name: "Rangasthalam - Cultural Events", venue: "Open Stage" },
        { time: "07:00 PM", name: "Closing Ceremony", venue: "Main Auditorium" },
      ],
    },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Challenging coding competitions and debugging contests that test your programming prowess.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Cultural Diversity",
      description: "Dance, music, and theme walks that celebrate the rich cultural heritage of our community.",
      color: "text-secondary",
    },
    {
      icon: Trophy,
      title: "Competitive Spirit",
      description: "Multiple competitions with exciting prizes and recognition for outstanding performers.",
      color: "text-primary",
    },
    {
      icon: Calendar,
      title: "Two-Day Extravaganza",
      description: "A carefully planned 2-day event featuring the perfect blend of technical and cultural activities.",
      color: "text-secondary",
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
              About LuMInA 2K25
            </h1>
            <p className="text-xl font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              LuMInA 2K25 is not just a fest; it's a celebration of the perfect harmony between 
              culture and technology. Organized by the Department of AI & Machine Learning, 
              this event brings together the brightest minds to showcase their talents in 
              both technical and cultural domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-6 text-gradient">
                Where Culture Meets Code
              </h2>
              <p className="text-lg font-inter text-muted-foreground mb-6 leading-relaxed">
                In an era where technology shapes our future, we believe that cultural values 
                and creativity are equally important. LuMInA 2K25 embodies this philosophy 
                by creating a platform where students can excel in both domains.
              </p>
              <p className="text-lg font-inter text-muted-foreground mb-6 leading-relaxed">
                From intense coding competitions to vibrant cultural performances, every event 
                is designed to bring out the best in our participants. Whether you're a tech 
                enthusiast or a culture lover, LuMInA has something special for everyone.
              </p>
              <div className="glass p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-orbitron font-semibold text-primary mb-3">
                  Our Vision
                </h3>
                <p className="font-inter text-muted-foreground">
                  To create an ecosystem where technical innovation and cultural expression 
                  coexist, inspiring the next generation of well-rounded professionals.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl hover-glow border border-primary/20 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4`}>
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <h4 className="font-orbitron font-semibold mb-2 text-sm">
                    {highlight.title}
                  </h4>
                  <p className="text-xs font-inter text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Event Timeline
            </h2>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              A comprehensive 2-day journey through the realms of technology and culture
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
                className="glass-strong p-8 rounded-2xl border border-primary/30"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-orbitron font-bold text-gradient mb-2">
                    {day.day}
                  </h3>
                  <p className="text-lg font-inter text-muted-foreground">
                    {day.date}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: eventIndex * 0.1 }}
                      className="glass p-4 rounded-lg border border-primary/20 hover-glow"
                    >
                      <div className="text-primary font-orbitron font-semibold text-sm mb-2">
                        {event.time}
                      </div>
                      <div className="font-inter font-medium mb-1 text-sm">
                        {event.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {event.venue}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-orbitron font-bold mb-8 text-gradient">
              Building on Success
            </h2>
            <div className="glass-strong p-12 rounded-2xl border border-primary/30 max-w-4xl mx-auto">
              <p className="text-xl font-inter text-muted-foreground leading-relaxed mb-8">
                Last year's LuMInA witnessed over 400 enthusiastic participants, 
                8 competitive events, and countless moments of brilliance. This year, 
                we're raising the bar even higher with enhanced competitions, 
                bigger prizes, and more opportunities for everyone to shine.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-orbitron font-bold text-primary mb-2">400+</div>
                  <div className="text-sm font-inter text-muted-foreground">Participants</div>
                </div>
                <div>
                  <div className="text-3xl font-orbitron font-bold text-secondary mb-2">₹40K</div>
                  <div className="text-sm font-inter text-muted-foreground">Prize Pool</div>
                </div>
                <div>
                  <div className="text-3xl font-orbitron font-bold text-primary mb-2">8</div>
                  <div className="text-sm font-inter text-muted-foreground">Events</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;