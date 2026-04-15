import Product from '../models/Product.js';
import Review from '../models/Review.js';

export const createProductReview = async (req, res, next) => {
  const { rating, comment } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    const alreadyReviewed = await Review.findOne({ user: req.user._id, product: req.params.id });
    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }
    const review = new Review({
      user: req.user._id,
      product: req.params.id,
      rating: Number(rating),
      comment,
    });
    await review.save();
    const reviews = await Review.find({ product: req.params.id });
    product.numReviews = reviews.length;
    product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review added' });
  } catch (error) {
    next(error);
  }
};
