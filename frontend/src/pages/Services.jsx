import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceAPI } from '../services/api';
import { UserGroupIcon, ServerIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await serviceAPI.getAll();
      setServices(response.data.data.services);
    } catch (error) {
      console.error('Failed to load services:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (category) => {
    switch (category) {
      case 'IT Consultation':
        return <UserGroupIcon className="w-12 h-12" />;
      case 'Network Installation':
        return <ServerIcon className="w-12 h-12" />;
      default:
        return <ServerIcon className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-gradient-to-r from-gtg-cyan-600 via-gtg-blue-500 to-gtg-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Comprehensive IT solutions for enterprise success
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-gtg-blue-600 mb-6">
                  {getIcon(service.category)}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                {service.features && service.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gtg-cyan-500 rounded-full mr-3 mt-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-gtg-blue-600 to-gtg-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;