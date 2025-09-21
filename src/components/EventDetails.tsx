
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventDetails = [
    {
      icon: MapPin,
      title: "Miami",
      value: "Florida",
      description: "Magic City venue experience",
      image: "https://images.unsplash.com/photo-1684620231189-fb3d9266e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI0NzN8MHwxfHNlYXJjaHwxfHxNaWFtaSUyMHNreWxpbmUlMjBiZWFjaHxlbnwwfDB8fHwxNzU4NDkxMjgzfDA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      icon: MapPin,
      title: "Orlando",
      value: "Florida", 
      description: "City Beautiful premiere location",
      image: "https://images.unsplash.com/photo-1578318099746-8701bb066ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI0NzN8MHwxfHNlYXJjaHwxfHxPcmxhbmRvJTIwdGhlbWUlMjBwYXJrJTIwY2FzdGxlfGVufDB8MHx8fDE3NTg0OTEyODV8MA&ixlib=rb-4.1.0&q=80&w=400"
    },
    {
      icon: MapPin,
      title: "Puerto Rico",
      value: "Caribbean",
      description: "Island paradise cultural event",
      image: "/assets/logos/Puertorico.jpg"
    },
    {
      icon: MapPin,
      title: "New York",
      value: "New York",
      description: "Big Apple exclusive screening",
      image: "https://images.unsplash.com/photo-1608568280145-b5be765add3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI0NzN8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwc2t5bGluZSUyMEVtcGlyZSUyMFN0YXRlJTIwQnVpbGRpbmd8ZW58MHwwfHx8MTc1ODQ5MTI4OHww&ixlib=rb-4.1.0&q=80&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">Event</span> Details
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A cinematic evening with purpose.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {eventDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden rounded-2xl h-80">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${detail.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  
                  {/* Modern overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-red-600/10" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    {/* Top section with icon */}
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
                    </div>
                    
                    {/* Bottom section with text */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{detail.title}</h3>
                        <p className="text-yellow-400 font-medium text-sm uppercase tracking-wider">{detail.value}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{detail.description}</p>
                      
                      {/* Modern accent line */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-red-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-bl-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Join us for the official premiere of "<span className="notranslate">YO NO ME FUI</span>": a charity event</h3>
            
            <div className="text-left space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Experience an afternoon of purpose with the official premiere of the short film <strong className="text-yellow-400 notranslate">"YO NO ME FUI,"</strong> presented by AIC Film Production. This inspiring production conveys a powerful message of awareness and prevention, addressing the urgent issue of gender-based violence and the real challenges our communities face.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Your participation will not only give you exclusive access to this powerful short film but will also support our educational and prevention initiatives.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                A time filled with purpose, networking, and inspiration, while contributing to meaningful change.
              </p>
              
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-yellow-400 mb-4">
                  Reserve your seat or become a sponsor today: make a difference with your presence.
                </p>
                <a
                  href="https://www.zeffy.com/en-US/ticketing/yo-no-me-fui-estreno-oficial-evento-fundraiser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Tickets Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;