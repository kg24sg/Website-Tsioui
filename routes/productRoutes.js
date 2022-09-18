const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

const PAGE_SIZE = 3;

productRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    console.log(query);
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || '';
    const price = query.price || '';
    const order = query.order || '';
    const searchQuery = query.query || '';

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};

    const priceFilter =
      price && price !== 'all'
        ? {
            price: {
              $gte: Number(price.split('-')[0]),
              $lte: Number(price.split('-')[1]),
            },
          }
        : {};

    const categoryFilter = category && category !== 'all' ? { category } : {};

    const sortOrder =
      order === 'featured'
        ? { featured: -1 }
        : order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : order === 'newest'
        ? { createdAt: -1 }
        : { _id: -1 };
    console.log(queryFilter);
    console.log(priceFilter);

    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    console.log('here');
    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
    });

    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);

productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

productRouter.get('/slug/:slug', async (req, res) => {
  console.log(req.params.slug);
  const product = await Product.findOne({ slug: req.params.slug });
  console.log(req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.send(404).send({ message: 'Product Not Found' });
  }
});

productRouter.get('/:id', async (req, res) => {
  console.log(req.params);
  const product = await Product.findById(req.params.id);
  console.log(req.params);
  if (product) {
    res.send(product);
  } else {
    res.send(404).send({ message: 'Product Not Found' });
  }
});

module.exports = productRouter;
