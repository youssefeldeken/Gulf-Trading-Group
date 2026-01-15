import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const slides = [
    {
      title: 'Network Infrastructure Excellence',
      subtitle: 'Building Tomorrow\'s Connectivity Today',
      description: 'Enterprise-grade network solutions for Egypt\'s leading corporations',
      gradient: 'from-gtg-blue-600 via-gtg-cyan-500 to-gtg-blue-700',
      cta: 'Explore Solutions',
      link: '/products',
    },
    {
      title: 'IT Solutions & Services',
      subtitle: 'Your Potentials... Our Passion',
      description: '24+ years of proven excellence in IT infrastructure and technology',
      gradient: 'from-gtg-cyan-600 via-gtg-blue-500 to-gtg-cyan-700',
      cta: 'Our Services',
      link: '/services',
    },
    {
      title: 'Trusted Technology Partner',
      subtitle: 'Serving Egypt Since 2000',
      description: 'Delivering cutting-edge IT equipment and network infrastructure solutions',
      gradient: 'from-gtg-green-600 via-gtg-cyan-500 to-gtg-green-700',
      cta: 'Learn More',
      link: '/about',
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative h-full w-full bg-gradient-to-br ${slide.gradient}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                    initial={{
                      x: Math.random() * window.innerWidth,
                      y: Math.random() * window.innerHeight,
                    }}
                    animate={{
                      y: [null, Math.random() * window.innerHeight],
                      x: [null, Math.random() * window.innerWidth],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 20,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />
                ))}
              </div>

              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-2xl md:text-3xl text-white/90 mb-4 font-light"
                    >
                      {slide.subtitle}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        to={slide.link}
                        className="px-8 py-4 bg-white text-gtg-blue-600 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                      >
                        {slide.cta}
                      </Link>

                      <Link
                        to="/contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105"
                      >
                        Contact Us
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="mt-12 grid grid-cols-3 gap-8"
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">24+</div>
                        <div className="text-white/70 text-sm">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">500+</div>
                        <div className="text-white/70 text-sm">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-1">100%</div>
                        <div className="text-white/70 text-sm">Client Satisfaction</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSlider;