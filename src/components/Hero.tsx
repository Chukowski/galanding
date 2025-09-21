
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Movie Poster Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/logos/Hero1.png)'
          }}
        />
        {/* Mobile Image */}
        <div
          className="block md:hidden w-full h-full bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/logos/Hero2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="notranslate">YO NO ME FUI</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></div>
            <span className="text-yellow-400 text-lg font-medium tracking-widest">
              AIC FILM PRODUCTION
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed px-2">
            A short film about gender-based violence<br className="hidden sm:block" />
            <span className="text-yellow-400">Event Fundraiser & Official Premiere</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <a
            href="https://www.zeffy.com/en-US/ticketing/yo-no-me-fui-estreno-oficial-evento-fundraiser"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              Reserve My Seat
            </span>
          </a>
          {/* <button className="group border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Ver Tráiler
            </span>
          </button> */}
        </motion.div>

        {/* Teaser Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 max-w-2xl mx-auto px-4"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div style={{ padding: '52.73% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1117259329?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                title="Teaser YO NO ME FUI"
              />
            </div>
          </div>
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