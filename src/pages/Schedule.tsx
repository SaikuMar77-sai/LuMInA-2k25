import { motion } from "framer-motion";
import { Clock, MapPin, Users, Calendar as CalendarIcon } from "lucide-react";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "October 13, 2025",
      color: "primary",
      events: [
        {
          time: "09:00 AM",
          name: "Inaugural Ceremony",
          venue: "Main Auditorium",
          description: "Grand opening of LuMInA 2K25 with welcome address and cultural performances",
          participants: "All attendees",
          duration: "1 hour",
          type: "ceremony",
        },
        {
          time: "10:30 AM",
          name: "TechQuit - Round 1",
          venue: "Computer Lab 1",
          description: "Technical quiz testing programming concepts and computer science fundamentals",
          participants: "40 teams",
          duration: "2 hours",
          type: "technical",
        },
        {
          time: "01:00 PM",
          name: "Lunch Break",
          venue: "College Cafeteria",
          description: "Networking lunch for all participants and organizers",
          participants: "All attendees",
          duration: "1 hour",
          type: "break",
        },
        {
          time: "02:00 PM",
          name: "Artify - Drawing Competition",
          venue: "Art Hall",
          description: "Creative drawing competition with themed challenges",
          participants: "60 individuals",
          duration: "2 hours",
          type: "creative",
        },
        {
          time: "04:00 PM",
          name: "Logic League - Debate Competition",
          venue: "Conference Room A",
          description: "Formal debate competition on contemporary topics",
          participants: "24 teams",
          duration: "2 hours",
          type: "literary",
        },
        {
          time: "06:30 PM",
          name: "Day 1 Wrap-up",
          venue: "Main Auditorium",
          description: "Results announcement and preview of Day 2 events",
          participants: "All attendees",
          duration: "30 minutes",
          type: "ceremony",
        },
      ],
    },
    {
      day: "Day 2",
      date: "October 14, 2025", 
      color: "secondary",
      events: [
        {
          time: "09:00 AM",
          name: "TechQuit - Round 2 (Debugging)",
          venue: "Computer Lab 2",
          description: "Advanced debugging challenges and code optimization tasks",
          participants: "20 qualified teams",
          duration: "2 hours",
          type: "technical",
        },
        {
          time: "11:00 AM",
          name: "Howzaat - Non-Technical Quiz",
          venue: "Main Hall",
          description: "Fun quiz covering sports, entertainment, and general knowledge",
          participants: "50 teams",
          duration: "2 hours",
          type: "quiz",
        },
        {
          time: "01:00 PM",
          name: "Lunch & Gaming Setup",
          venue: "College Cafeteria & Gaming Arena",
          description: "Lunch break with parallel setup for e-sports tournaments",
          participants: "All attendees",
          duration: "1 hour",
          type: "break",
        },
        {
          time: "02:00 PM",
          name: "Tactical Showdown - E-Sports",
          venue: "Gaming Arena",
          description: "Competitive mobile gaming tournaments (Free Fire & BGMI)",
          participants: "32 squads",
          duration: "3 hours",
          type: "esports",
        },
        {
          time: "05:00 PM",
          name: "Rangasthalam - Cultural Events",
          venue: "Open Stage & Main Auditorium",
          description: "Dance, music, and theme walk competitions celebrating diversity",
          participants: "80 performers",
          duration: "2 hours",
          type: "cultural",
        },
        {
          time: "07:00 PM",
          name: "Closing Ceremony & Prize Distribution",
          venue: "Main Auditorium",
          description: "Final results, prize distribution, and closing remarks",
          participants: "All attendees",
          duration: "1.5 hours",
          type: "ceremony",
        },
      ],
    },
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      ceremony: "border-l-primary bg-primary/10",
      technical: "border-l-blue-400 bg-blue-400/10",
      creative: "border-l-purple-400 bg-purple-400/10",
      literary: "border-l-green-400 bg-green-400/10",
      quiz: "border-l-yellow-400 bg-yellow-400/10",
      esports: "border-l-red-400 bg-red-400/10",
      cultural: "border-l-pink-400 bg-pink-400/10",
      break: "border-l-muted bg-muted/10",
    };
    return colors[type as keyof typeof colors] || "border-l-primary bg-primary/10";
  };

  const getEventTypeIcon = (type: string) => {
    return type === "ceremony" ? "🎉" : 
           type === "technical" ? "💻" :
           type === "creative" ? "🎨" :
           type === "literary" ? "📖" :
           type === "quiz" ? "❓" :
           type === "esports" ? "🎮" :
           type === "cultural" ? "🎭" : "🍽️";
  };

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
              Event Schedule
            </h1>
            <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
              Your complete guide to two days of exciting competitions, cultural performances, 
              and networking opportunities at LuMInA 2K25.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {scheduleData.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              >
                {/* Day Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 glass-strong p-6 rounded-2xl border border-primary/30">
                    <CalendarIcon className="w-8 h-8 text-primary" />
                    <div>
                      <h2 className="text-4xl font-orbitron font-bold text-gradient">
                        {day.day}
                      </h2>
                      <p className="text-lg font-inter text-muted-foreground">
                        {day.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Events Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

                  <div className="space-y-8">
                    {day.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                        className="relative pl-12"
                      >
                        {/* Timeline Node */}
                        <div className={`absolute left-2 top-6 w-4 h-4 rounded-full bg-${day.color} border-2 border-background`} />

                        {/* Event Card */}
                        <div className={`glass-strong p-6 rounded-xl border-l-4 ${getEventTypeColor(event.type)} hover-glow transition-all duration-300`}>
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{getEventTypeIcon(event.type)}</span>
                              <div>
                                <h3 className="text-xl font-orbitron font-bold text-gradient">
                                  {event.name}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  <span className="font-inter">{event.time} ({event.duration})</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-2 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span className="font-inter">{event.venue}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Users className="w-4 h-4 text-secondary" />
                                <span className="font-inter">{event.participants}</span>
                              </div>
                            </div>
                          </div>

                          <p className="font-inter text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-8 rounded-2xl border border-primary/30"
          >
            <h3 className="text-2xl font-orbitron font-bold text-gradient mb-6 text-center">
              Important Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <h4 className="font-orbitron font-semibold text-primary">Registration Notes</h4>
                <ul className="space-y-2 font-inter text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Registration closes 30 minutes before each event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Participants must carry valid ID proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span>Entry fees to be paid at registration desk</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-orbitron font-semibold text-secondary">General Guidelines</h4>
                <ul className="space-y-2 font-inter text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Participants must be present 15 minutes before their event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Refreshments will be provided during breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                    <span>Certificates will be awarded to all participants</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;