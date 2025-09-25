import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, CheckCircle, User, Mail, Users, Heart } from 'lucide-react';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoEntrada: '',
    interesAuspicio: '',
    mensaje: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://n8n.akitapr.com/webhook/yonomefui', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          nombre: '',
          email: '',
          tipoEntrada: '',
          interesAuspicio: '',
          mensaje: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('There was an error sending your message. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-green-500/30">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest in "Yo No Me Fui". Our team will contact 
                you shortly to provide more details about the event 
                and available options.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setError(null);
                }}
                className="bg-gradient-to-r from-yellow-400 to-red-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-red-500 transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reservations & <span className="text-yellow-400">Sponsorship</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete the form to reserve your tickets or request details 
            about sponsorship opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-yellow-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300"
                    placeholder="aic@aiccapellania.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-yellow-400" />
                    Ticket Type
                  </label>
                  <select
                    name="tipoEntrada"
                    value={formData.tipoEntrada}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select an option</option>
                    <option value="consultar">I need more information</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4 text-yellow-400" />
                    Sponsorship Interest
                  </label>
                  <select
                    name="interesAuspicio"
                    value={formData.interesAuspicio}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select an option</option>
                    <option value="transformacional">Transformative Sponsor ($4,500)</option>
                    <option value="comprometido">Committed Sponsor ($4,000)</option>
                    <option value="solidario">Sponsoring Sponsor ($3,500)</option>
                    <option value="no-interesado">Not interested</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white font-semibold">
                  Additional Message
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us more about your interest or specific questions..."
                ></textarea>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <p className="text-red-400 text-center">{error}</p>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`group bg-gradient-to-r from-yellow-400 to-red-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <Send className={`w-5 h-5 transition-transform duration-300 ${
                    isLoading ? 'animate-pulse' : 'group-hover:translate-x-1'
                  }`} />
                  {isLoading ? 'Sending...' : 'Send Request'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;