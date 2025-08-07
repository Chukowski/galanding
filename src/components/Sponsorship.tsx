import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Star, Heart, Handshake } from 'lucide-react';

const Sponsorship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sponsorshipTiers = [
    {
      id: 'visionario',
      icon: Crown,
      title: 'Auspiciador Visionario',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'from-yellow-400/20 to-yellow-600/20',
      description: 'Liderazgo transformacional en la causa',
      features: [
        'Logo prominente en todos los materiales',
        'Reconocimiento principal durante la gala',
        'Mesa VIP para ejecutivos',
        'Entrevistas en medios',
        'Presencia en redes sociales'
      ]
    },
    {
      id: 'transformacional',
      icon: Star,
      title: 'Auspiciador Transformador',
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-500/20 to-red-700/20',
      description: 'Impacto significativo en la comunidad',
      features: [
        'Logo en materiales principales',
        'Reconocimiento durante el evento',
        'Asientos preferenciales',
        'Mención en comunicados',
        'Certificado de participación'
      ]
    },
    {
      id: 'comprometido',
      icon: Heart,
      title: 'Auspiciador Comprometido',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'from-purple-500/20 to-purple-700/20',
      description: 'Compromiso genuino con la causa',
      features: [
        'Logo en programa del evento',
        'Reconocimiento verbal',
        'Entradas preferenciales',
        'Material promocional',
        'Red de contactos'
      ]
    },
    {
      id: 'solidario',
      icon: Handshake,
      title: 'Auspiciador Solidario',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-500/20 to-blue-700/20',
      description: 'Solidaridad empresarial responsable',
      features: [
        'Mención en materiales',
        'Agradecimiento público',
        'Entradas al evento',
        'Certificado de apoyo',
        'Conexiones valiosas'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Oportunidades de <span className="text-yellow-400">Auspicio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Únase como aliado estratégico en esta causa que busca transformar vidas 
            por medio del arte y la conciencia social
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sponsorshipTiers.map((tier, index) => {
            const Icon = tier.icon;
            
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-yellow-400 transition-colors duration-300">
                      {tier.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                      {tier.description}
                    </p>
                    
                    <div className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${tier.color} rounded-full flex-shrink-0 mt-2`}></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
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
            <h3 className="text-2xl font-bold text-white mb-4">Beneficios Adicionales</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h4 className="text-white font-semibold mb-2">Visibilidad de Marca</h4>
                <p className="text-gray-400 text-sm">Exposición durante y después del evento</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Impacto Social</h4>
                <p className="text-gray-400 text-sm">Contribución directa a la causa</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Networking</h4>
                <p className="text-gray-400 text-sm">Conexiones valiosas con líderes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsorship;