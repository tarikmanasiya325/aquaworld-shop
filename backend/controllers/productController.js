import mongoose from 'mongoose';
import Product from '../models/Product.js';
import fallbackProducts from '../data/products.js';

const mapFallbackProducts = (products) => products.map((product, index) => ({
  ...product,
  _id: product._id || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  countInStock: product.countInStock ?? 10,
  rating: product.rating ?? 0,
  numReviews: product.numReviews ?? 0,
}));

const getFallbackProducts = ({ keyword, category } = {}) => {
  const normalizedProducts = mapFallbackProducts(fallbackProducts);
  return normalizedProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesKeyword = keyword
      ? product.name.toLowerCase().includes(keyword.toLowerCase())
      : true;
    return matchesCategory && matchesKeyword;
  });
};

const findProducts = async (filter) => {
  if (mongoose.connection.readyState !== 1) {
    const keyword = filter.name?.$regex ?? undefined;
    const category = filter.category;
    return getFallbackProducts({ keyword, category });
  }
  return Product.find(filter);
};

export const getProducts = async (req, res, next) => {
  const keyword = req.query.keyword
    ? {
        name: { $regex: req.query.keyword, $options: 'i' },
      }
    : {};
  const categoryFilter = req.query.category ? { category: req.query.category } : {};
  const filter = { ...keyword, ...categoryFilter };

  try {
    const products = await findProducts(filter);
    res.json(products);
  } catch (error) {
    if (mongoose.connection.readyState !== 1) {
      const products = getFallbackProducts({
        keyword: req.query.keyword,
        category: req.query.category,
      });
      res.json(products);
    } else {
      next(error);
    }
  }
};

export const getProductById = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const products = mapFallbackProducts(fallbackProducts);
      const product = products.find((item) => item._id === req.params.id);
      if (product) {
        return res.json(product);
      }
      res.status(404);
      throw new Error('Product not found');
    }

    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image || '/images/sample.jpg',
      category: req.body.category,
      description: req.body.description,
      countInStock: req.body.countInStock || 0,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.image = req.body.image || product.image;
      product.category = req.body.category || product.category;
      product.description = req.body.description || product.description;
      product.countInStock = req.body.countInStock || product.countInStock;
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    next(error);
  }
};
