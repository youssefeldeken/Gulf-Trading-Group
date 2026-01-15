import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gtg-blue-900 via-gtg-cyan-900 to-gtg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="GTG" className="h-10 w-10" />
              <div>
                <h3 className="font-bold text-lg">Gulf Trading Group</h3>
                <p className="text-xs text-white/70">Since 2000</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Leading IT infrastructure solutions provider in Egypt.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-white/80 hover:text-white transition">Home</Link>
              <Link to="/products" className="block text-white/80 hover:text-white transition">Products</Link>
              <Link to="/services" className="block text-white/80 hover:text-white transition">Services</Link>
              <Link to="/about" className="block text-white/80 hover:text-white transition">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>IT Consultation</p>
              <p>Network Installation</p>
              <p>Infrastructure Solutions</p>
              <p>Enterprise Support</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>Egypt</p>
              <p>info@gulftradinggroup.com</p>
              <p>Sun-Thu: 9AM - 5PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
          <p>&copy; 2026 Gulf Trading Group. All rights reserved. | Excellence in IT Infrastructure Since 2000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;