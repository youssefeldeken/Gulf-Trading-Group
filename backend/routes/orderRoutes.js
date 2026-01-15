// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  assignOrder,
  deleteOrder,
  getOrderStats
} = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/auth');

// Public routes
router.post('/', createOrder);

// Admin routes (protected)
router.get('/', protect, adminOnly, getAllOrders);
router.get('/stats/overview', protect, adminOnly, getOrderStats);
router.get('/:id', protect, adminOnly, getOrder);
router.put('/:id/status', protect, adminOnly, updateOrderStatus);
router.put('/:id/assign', protect, adminOnly, assignOrder);
router.delete('/:id', protect, adminOnly, deleteOrder);

module.exports = router;