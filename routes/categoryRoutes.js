const express = require('express');
const expressAsyncHandler = require('express-async-handler');
//const data = require('../data');
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const { isAuth, isAdmin } = require('../utils.js');
const categoryRouter = express.Router();

categoryRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
  })
);

categoryRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    console.log(category);
    if (category) {
      res.send(category);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

categoryRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.image = req.body.image || category.image;
      const updatedCategory = await category.save();
      res.send({ message: 'User Updated', category: updatedCategory });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);
module.exports = categoryRouter;
