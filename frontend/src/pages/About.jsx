import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, EyeIcon, TrophyIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-gradient-to-r from-gtg-green-600 via-gtg-cyan-500 to-gtg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            About Gulf Trading Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            24+ years of excellence in IT infrastructure
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Founded in 2000, Gulf Trading Group began its journey in the trade of computer devices, quickly establishing 
            itself as a reliable partner for businesses across Egypt. Over the years, we have evolved and expanded our 
            expertise into comprehensive network infrastructure development.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Today, we serve major corporations throughout Egypt, providing enterprise-grade IT solutions, network 
            infrastructure, and expert consultation services. Our commitment to excellence and reliability has made us 
            a trusted name in the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-gtg-blue-500 to-gtg-cyan-500 text-white rounded-xl mb-4">
              <ShieldCheckIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide cutting-edge IT infrastructure solutions that empower businesses to achieve their digital transformation goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-gtg-cyan-500 to-gtg-green-500 text-white rounded-xl mb-4">
              <EyeIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-600">
              To be Egypt's leading IT infrastructure partner, recognized for innovation, reliability, and exceptional service delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="inline-block p-4 bg-gradient-to-br from-gtg-green-500 to-gtg-blue-500 text-white rounded-xl mb-4">
              <TrophyIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, and unwavering commitment to customer success guide everything we do.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gtg-blue-600 mb-2">24+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gtg-cyan-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gtg-green-600 mb-2">100+</div>
              <p className="text-gray-600">Corporate Clients</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-gtg-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;