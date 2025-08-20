
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FilmDescription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-400/20"></div>
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More than a story,<br />
              <span className="text-yellow-400">a voice that breaks the silence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-yellow-400">"Yo No Me Fui"</strong> is a high social content audiovisual production, developed by AIC Film Production, the new initiative of the International Academy of Chaplaincy.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This work is based on <strong className="text-white">real stories</strong> related to gender-based violence, and aims to create social impact through awareness, education and prevention.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                It exposes emotions, cycles of abuse, invisible consequences and <strong className="text-red-400">the courage to survive</strong>. This short film seeks to become an educational and reflection tool for communities, institutions and leaders working for the restoration of families and human dignity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="/assets/logos/YNMF-Poster 1.jpg"
                  alt="Short film scene"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmDescription;