import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const Recognition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%200L30%2020L20%2040L10%2020z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Special <span className="text-yellow-400">Recognition</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Honoring organizations that carry out exemplary work 
            on women's issues and gender-based violence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-400/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Featured Organizations
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  During the gala, we will pay tribute to organizations that carry out exemplary work 
                  on women's issues and sexual and gender-based violence, highlighting their 
                  <strong className="text-yellow-400"> social impact</strong> and their commitment to 
                  <strong className="text-red-400"> justice and restoration of lives</strong>.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Community Impact</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recognition of organizations that work directly 
                    with communities affected by gender-based violence
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Prevention Work</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Honoring education and prevention initiatives 
                    that work at the root of the problem
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Support & Restoration</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Celebrating organizations that provide comprehensive support 
                    and restoration to survivors
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-12"
              >
                <div className="bg-gradient-to-r from-yellow-400/10 to-red-400/10 border border-yellow-400/30 rounded-lg p-6">
                  <p className="text-yellow-400 font-semibold text-lg">
                    Does your organization work in gender justice?
                  </p>
                  <p className="text-gray-300 mt-2">
                    Contact us to learn about the nomination criteria 
                    and participate in this special celebration.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;