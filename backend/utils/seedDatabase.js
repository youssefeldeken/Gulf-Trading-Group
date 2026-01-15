// utils/seedDatabase.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Product = require('../models/Product');
const Service = require('../models/Service');

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Service.deleteMany();
    console.log('🗑️  Existing data cleared');

    // Create Admin User
    const admin = await User.create({
      name: 'Gulf Trading Admin',
      email: process.env.ADMIN_EMAIL || 'admin@gulftradinggroup.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123456',
      role: 'admin',
      company: 'Gulf Trading Group'
    });
    console.log('✅ Admin user created');

    // Create Sample Products
    const products = await Product.create([
      {
        name: 'HD Security Camera System',
        category: 'Security Cameras',
        description: 'Advanced surveillance with 4K resolution and night vision capabilities',
        image: '📹',
        brand: 'Hikvision',
        specifications: ['4K Resolution', 'Night Vision', 'Motion Detection', 'Remote Access'],
        featured: true,
        inStock: true
      },
      {
        name: 'Enterprise Laptop - Dell Latitude',
        category: 'Laptops',
        description: 'High-performance business laptops for professional use',
        image: '💻',
        brand: 'Dell',
        model: 'Latitude 7430',
        specifications: ['Intel Core i7', '16GB RAM', '512GB SSD', '14" Display'],
        featured: true,
        inStock: true
      },
      {
        name: 'HP Workstation PC',
        category: 'PCs',
        description: 'Powerful workstations for demanding applications',
        image: '🖥️',
        brand: 'HP',
        specifications: ['Intel Xeon Processor', '32GB RAM', '1TB SSD', 'NVIDIA Graphics'],
        featured: true,
        inStock: true
      },
      {
        name: 'Dell PowerEdge Rack Server',
        category: 'Servers',
        description: 'Enterprise-grade servers for data centers',
        image: '🖲️',
        brand: 'Dell',
        model: 'PowerEdge R750',
        specifications: ['Dual Xeon Processors', '128GB RAM', 'Hot-swap Drives', 'Redundant PSU'],
        featured: true,
        inStock: true
      },
      {
        name: 'Cisco Catalyst Switch',
        category: 'Switches',
        description: 'High-speed managed switches for network infrastructure',
        image: '🔌',
        brand: 'Cisco',
        model: 'Catalyst 9300',
        specifications: ['48 Ports', 'Layer 3', 'PoE+', 'Stackable'],
        featured: false,
        inStock: true
      },
      {
        name: '42U Server Rack Cabinet',
        category: 'Racks',
        description: 'Professional-grade server racks and cabinets',
        image: '🗄️',
        specifications: ['42U Height', 'Lockable Doors', 'Cable Management', 'Ventilation'],
        featured: false,
        inStock: true
      },
      {
        name: 'HP LaserJet Enterprise Printer',
        category: 'Printers',
        description: 'Multi-function printers for office environments',
        image: '🖨️',
        brand: 'HP',
        model: 'LaserJet Enterprise M608',
        specifications: ['Laser Printing', 'Duplex', 'Network Ready', 'High Capacity'],
        featured: false,
        inStock: true
      },
      {
        name: 'Network Cable & Accessories Kit',
        category: 'Other',
        description: 'Cat6 cables, RJ45 connectors, and network tools',
        image: '📦',
        specifications: ['Cat6 Certified', 'Various Lengths', 'Professional Grade'],
        featured: false,
        inStock: true
      }
    ]);
    console.log(`✅ ${products.length} products created`);

    // Create Services
    const services = await Service.create([
      {
        title: 'IT Consultation',
        category: 'IT Consultation',
        description: 'Expert guidance on technology strategy, infrastructure planning, and digital transformation for your enterprise.',
        longDescription: 'Our IT consultation services provide comprehensive analysis of your current infrastructure, strategic planning for technology adoption, and expert recommendations tailored to your business needs. We help organizations navigate complex technology decisions and implement solutions that drive business success.',
        features: [
          'Technology Strategy Development',
          'Infrastructure Assessment',
          'Digital Transformation Planning',
          'Vendor Selection & Management',
          'Technology Roadmap Creation'
        ],
        benefits: [
          'Reduced IT Costs',
          'Improved Efficiency',
          'Better Technology Alignment',
          'Risk Mitigation'
        ],
        icon: 'consultation-icon',
        featured: true,
        active: true
      },
      {
        title: 'Network Installation',
        category: 'Network Installation',
        description: 'Professional design, deployment, and configuration of complete network infrastructure solutions.',
        longDescription: 'From planning to implementation, our network installation services ensure your infrastructure is built to the highest standards. We handle everything from cabling to configuration, ensuring optimal performance and reliability for your business operations.',
        features: [
          'Network Design & Planning',
          'Structured Cabling Installation',
          'Switch & Router Configuration',
          'Wireless Network Setup',
          'Testing & Documentation'
        ],
        benefits: [
          'Reliable Connectivity',
          'Scalable Infrastructure',
          'Professional Installation',
          'Ongoing Support'
        ],
        icon: 'network-icon',
        featured: true,
        active: true
      }
    ]);
    console.log(`✅ ${services.length} services created`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📝 Admin Credentials:');
    console.log(`Email: ${admin.email}`);
    console.log(`Password: ${process.env.ADMIN_PASSWORD || 'Admin@123456'}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();