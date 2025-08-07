import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventDetails = [
    {
      icon: Calendar,
      title: "Fecha",
      value: "Próximamente anunciada",
      description: "Manténgase atento a nuestras actualizaciones"
    },
    {
      icon: MapPin,
      title: "Lugar",
      value: "Miami, Florida",
      description: "Ubicación exclusiva en el corazón de la ciudad"
    },
    {
      icon: Users,
      title: "Vestimenta",
      value: "Formal / Gala",
      description: "Una noche elegante y memorable"
    },
    {
      icon: Clock,
      title: "Formato",
      value: "Experiencia Completa",
      description: "Alfombra roja, proyección, cena ligera"
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
            Detalles del <span className="text-yellow-400">Evento</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una noche cinematográfica con propósito en Miami, FL
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
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Programación Especial</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Alfombra roja y recepción</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Proyección del cortometraje</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Palabras de sobrevivientes y líderes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300">Cena ligera y networking</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;