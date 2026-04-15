import Order from '../models/Order.js';

export const addOrder = async (req, res, next) => {
  const { orderItems, totalPrice } = req.body;
  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    return next(new Error('No order items')); 
  }

  try {
    const order = new Order({
      user: req.user._id,
      orderItems,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    next(error);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
