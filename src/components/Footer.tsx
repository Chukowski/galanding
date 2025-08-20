import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">YO NO ME FUI</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              An AIC Film Production that seeks to create social impact 
              through awareness, education and prevention of gender-based violence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors duration-300 group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">aic@aiccapellania.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">+1 (786) 821-2258</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">Miami, Florida</span>
              </div>
            </div>
          </motion.div>

          {/* Organizations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Organizations</h4>
            <div className="space-y-3">
              <div>
                <p className="text-yellow-400 font-semibold text-sm">AIC Film Production</p>
                <p className="text-gray-400 text-xs">Short film producer</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold text-sm">International Academy of Chaplaincy</p>
                <p className="text-gray-400 text-xs">Parent organization</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 AIC Film Production. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                An initiative of the International Academy of Chaplaincy
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;