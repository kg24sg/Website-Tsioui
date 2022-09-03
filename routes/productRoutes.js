const express = require('express');

const data = require('../data');
const Product = require('../models/productModel');

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

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
