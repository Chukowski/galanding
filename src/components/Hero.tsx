import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            YO NO ME FUI
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-400 text-lg font-medium tracking-widest">
              AIC FILM PRODUCTION
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Un cortometraje sobre la violencia de género<br />
            <span className="text-yellow-400">Gala Fundraiser & Estreno Oficial</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="group bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Reservar Mi Lugar
            </span>
          </button>
          <button className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Ver Tráiler
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-8 bg-gradient-to-b from-yellow-400 to-transparent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;