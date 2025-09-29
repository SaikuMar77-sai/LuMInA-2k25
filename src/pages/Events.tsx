import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  const events = [
    {
      id: "techquit",
      name: "TechQuit",
      category: "Technical",
      description: "A two-round technical competition combining quiz knowledge and debugging skills to test your programming expertise.",
      rounds: ["Round 1: Technical Quiz", "Round 2: Debugging Challenge"],
      timing: "Day 1: 10:30 AM, Day 2: 09:00 AM",
      venue: "Computer Labs 1 & 2",
      entryFee: "₹50 per team",
      prizes: "1st: ₹5000, 2nd: ₹3000, 3rd: ₹1500",
      teamSize: "2-3 members",
      gradient: "from-primary/20 to-secondary/20",
      borderColor: "border-primary/30",
    },
    {
      id: "artify",
      name: "Artify",
      category: "Creative",
      description: "Unleash your artistic creativity in this drawing competition where imagination meets skill.",
      rounds: ["Single Round Drawing Competition"],
      timing: "Day 1: 02:00 PM - 04:00 PM",
      venue: "Art Hall",
      entryFee: "₹30 per person",
      prizes: "1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000",
      teamSize: "Individual",
      gradient: "from-secondary/20 to-primary/20",
      borderColor: "border-secondary/30",
    },
    {
      id: "logic-league",
      name: "Logic League",
      category: "Literary",
      description: "A formal debate competition where eloquence meets intellect in structured argumentation.",
      rounds: ["Preliminary Round", "Semi-Finals", "Finals"],
      timing: "Day 1: 04:00 PM - 06:00 PM",
      venue: "Conference Room A",
      entryFee: "₹40 per team",
      prizes: "1st: ₹4000, 2nd: ₹2500, 3rd: ₹1500",
      teamSize: "2 members",
      gradient: "from-primary/20 to-secondary/20",
      borderColor: "border-primary/30",
    },
    {
      id: "howzaat",
      name: "Howzaat",
      category: "Quiz",
      description: "A fun-filled non-technical quiz covering sports, entertainment, current affairs, and general knowledge.",
      rounds: ["Preliminary Quiz", "Final Round"],
      timing: "Day 2: 11:00 AM - 01:00 PM",
      venue: "Main Hall",
      entryFee: "₹30 per team",
      prizes: "1st: ₹3500, 2nd: ₹2000, 3rd: ₹1000",
      teamSize: "2-3 members",
      gradient: "from-secondary/20 to-primary/20",
      borderColor: "border-secondary/30",
    },
    {
      id: "tactical-showdown",
      name: "Tactical Showdown",
      category: "E-Sports",
      description: "Battle it out in popular mobile games - Free Fire and BGMI tournaments for gaming enthusiasts.",
      rounds: ["Free Fire Tournament", "BGMI Tournament"],
      timing: "Day 2: 02:00 PM - 05:00 PM",
      venue: "Gaming Arena",
      entryFee: "₹100 per team",
      prizes: "Each game - 1st: ₹6000, 2nd: ₹4000, 3rd: ₹2000",
      teamSize: "4 members (Squad)",
      gradient: "from-primary/20 to-secondary/20",
      borderColor: "border-primary/30",
    },
    {
      id: "rangasthalam",
      name: "Rangasthalam",
      category: "Cultural",
      description: "A vibrant cultural extravaganza featuring dance, music, and creative theme walks celebrating diversity.",
      rounds: ["Dance Competition", "Singing Competition", "Theme Walk"],
      timing: "Day 2: 05:00 PM - 07:00 PM",
      venue: "Open Stage & Main Auditorium",
      entryFee: "₹50 per performance",
      prizes: "Each category - 1st: ₹4000, 2nd: ₹2500, 3rd: ₹1500",
      teamSize: "Individual or Group (max 8)",
      gradient: "from-secondary/20 to-primary/20",
      borderColor: "border-secondary/30",
    },
  ];

  const categories = ["All", "Technical", "Creative", "Literary", "Quiz", "E-Sports", "Cultural"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

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
              Events
            </h1>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              Discover our exciting lineup of technical competitions, cultural performances, 
              and creative challenges designed to showcase your talents.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "hero" : "glass"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-strong p-6 rounded-xl hover-glow border ${event.borderColor} group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-inter font-semibold rounded-full border border-primary/30">
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-orbitron font-bold mb-3 text-gradient">
                    {event.name}
                  </h3>
                  
                  <p className="text-sm font-inter text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-inter text-muted-foreground">{event.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-inter text-muted-foreground">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="font-inter text-muted-foreground">{event.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      <span className="font-inter text-muted-foreground">{event.entryFee}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="neon" size="sm" className="flex-1">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-strong border border-primary/30 max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-orbitron text-gradient">
                            {event.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="font-inter text-muted-foreground">
                            {event.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="glass p-4 rounded-lg">
                              <h4 className="font-orbitron font-semibold text-primary mb-2">Event Details</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-primary" />
                                  <span className="font-inter">{event.timing}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-primary" />
                                  <span className="font-inter">{event.venue}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-primary" />
                                  <span className="font-inter">{event.teamSize}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <IndianRupee className="w-4 h-4 text-primary" />
                                  <span className="font-inter">{event.entryFee}</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="glass p-4 rounded-lg">
                              <h4 className="font-orbitron font-semibold text-secondary mb-2">Prizes</h4>
                              <div className="flex items-center gap-2 mb-2">
                                <Trophy className="w-4 h-4 text-secondary" />
                                <span className="font-inter text-sm">{event.prizes}</span>
                              </div>
                            </div>
                          </div>

                          <div className="glass p-4 rounded-lg">
                            <h4 className="font-orbitron font-semibold text-primary mb-2">Rounds</h4>
                            <ul className="space-y-1">
                              {event.rounds.map((round, idx) => (
                                <li key={idx} className="font-inter text-sm text-muted-foreground flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {round}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="hero" 
                          size="sm" 
                          onClick={() => setSelectedEvent(event.name)}
                        >
                          Register
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-strong border border-primary/30">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-orbitron text-gradient">
                            Register for {selectedEvent}
                          </DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Team Leader Name</Label>
                              <Input id="name" placeholder="Enter your name" className="glass" />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="your.email@example.com" className="glass" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" placeholder="Your phone number" className="glass" />
                            </div>
                            <div>
                              <Label htmlFor="college">College</Label>
                              <Input id="college" placeholder="Your college name" className="glass" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="members">Team Members (if applicable)</Label>
                            <Textarea id="members" placeholder="List your team members with their contact details" className="glass" />
                          </div>
                          <Button variant="hero" className="w-full">
                            Submit Registration
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;