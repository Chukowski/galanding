
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
      description: "Magic City venue experience"
    },
    {
      icon: MapPin,
      title: "Orlando",
      value: "Florida", 
      description: "City Beautiful premiere location"
    },
    {
      icon: MapPin,
      title: "Puerto Rico",
      value: "Caribbean",
      description: "Island paradise cultural event"
    },
    {
      icon: MapPin,
      title: "New York",
      value: "New York",
      description: "Big Apple exclusive screening"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{detail.title}</h3>
                    <p className="text-lg font-semibold text-yellow-400 mb-3">{detail.value}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{detail.description}</p>
                  </div>
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