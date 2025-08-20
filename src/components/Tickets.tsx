import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Users, Star, Gift } from 'lucide-react';

const Tickets = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const ticketOptions = [
    {
      id: 'individual',
      icon: User,
      title: 'General Admission',
      description: 'Access to the official premiere of the short film "YO NO ME FUI", a fundraising event supporting the educational campaign to prevent gender-based violence.',
      features: [
        'Access to official premiere',
        'Afternoon of cinema & inspiration',
        'Social commitment experience',
        'Support educational campaign',
        'Prevention awareness program'
      ],
      price: '$65',
      popular: false
    },
    {
      id: 'group',
      icon: Users,
      title: 'General Admission – Group of 10',
      description: 'Special package for 10 people with access to the official premiere. Experience cinema, inspiration, and social commitment.',
      features: [
        'Special package for 10 people',
        'Access to official premiere',
        'Cinema & inspiration experience',
        'Social commitment afternoon',
        'Educational campaign support',
        'Group seating arrangement'
      ],
      price: '$55 per person',
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">Tickets</span> Available
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure your place at this transformative event
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {ticketOptions.map((ticket, index) => {
            const Icon = ticket.icon;
            const isSelected = selectedTicket === ticket.id;
            
            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative group cursor-pointer ${isSelected ? 'scale-105' : ''}`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-red-600 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  ticket.popular 
                    ? 'border-yellow-400/50 hover:border-yellow-400' 
                    : 'border-gray-700 hover:border-gray-600'
                } ${isSelected ? 'border-yellow-400 shadow-2xl' : ''}`}>
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      ticket.popular 
                        ? 'bg-gradient-to-br from-yellow-400 to-red-600' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${ticket.popular ? 'text-black' : 'text-white'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{ticket.title}</h3>
                    <p className="text-gray-400 mb-4" dangerouslySetInnerHTML={{
                      __html: ticket.description.replace(/"YO NO ME FUI"/g, '<span class="notranslate">"YO NO ME FUI"</span>')
                    }}></p>
                    <div className="text-3xl font-bold text-yellow-400">{ticket.price}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {ticket.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://www.zeffy.com/en-US/ticketing/yo-no-me-fui-estreno-oficial-evento-fundraiser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                      ticket.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-red-600 text-black hover:from-yellow-300 hover:to-red-500'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    } ${isSelected ? 'scale-105' : ''}`}
                  >
                    Get Tickets
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Event Information</span>
            </div>
            <p className="text-gray-400 text-sm">
              Join us for an afternoon of cinema, inspiration, and social commitment while supporting 
              the educational campaign to prevent gender-based violence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tickets;