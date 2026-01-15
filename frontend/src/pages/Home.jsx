import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import { productAPI } from '../services/api';
import { ShieldCheckIcon, CpuChipIcon, TrophyIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const response = await productAPI.getFeatured();
      setFeaturedProducts(response.data.data.products);
    } catch (error) {
      console.error('Failed to load featured products:', error);
    }
  };

  const features = [
    {
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      title: 'Reliability',
      description: '24+ years of proven excellence in IT infrastructure and network solutions.',
      gradient: 'from-gtg-blue-500 to-gtg-cyan-500',
    },
    {
      icon: <CpuChipIcon className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Cutting-edge technology solutions tailored for modern enterprises.',
      gradient: 'from-gtg-cyan-500 to-gtg-green-500',
    },
    {
      icon: <TrophyIcon className="w-12 h-12" />,
      title: 'Excellence',
      description: 'Trusted by Egypt\'s leading corporations for mission-critical infrastructure.',
      gradient: 'from-gtg-green-500 to-gtg-blue-500',
    },
  ];

  return (
    <div>
      <HeroSlider />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leading IT Trading & Network Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2000, Gulf Trading Group has been Egypt's trusted partner for enterprise IT infrastructure,
              serving major corporations with excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${feature.gradient} text-white rounded-xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-xl text-gray-600">Enterprise-grade IT equipment and infrastructure solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 6).map((product) => (
                <motion.div
                  key={product._id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-br from-gtg-blue-100 to-gtg-cyan-100 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gtg-cyan-600 font-semibold mb-2">{product.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    <Link
                      to="/contact"
                      className="w-full block text-center px-6 py-3 bg-gradient-to-r from-gtg-blue-500 to-gtg-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Request Information
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-gradient-to-r from-gtg-blue-500 to-gtg-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 gtg-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve its technology goals.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-gtg-blue-600 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;