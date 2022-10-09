const express = require('express');
const expressAsyncHandler = require('express-async-handler');
//const data = require('../data');
const Favorite = require('../models/favoriteModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const { isAuth, isAdmin } = require('../utils.js');
const favoriteRouter = express.Router();

favoriteRouter.post(
  '/add',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newFavorite = new Favorite({
      product: req.body.product._id,
      userFrom: req.body.user._id,
    });

    const favorite = await newFavorite.save();
    res.send({ message: 'Add Product to Favorites', favorite });
  })
);

favoriteRouter.get(
  '/peruser/:userid/:productid',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const favorites = await Favorite.find({
      userFrom: req.params.userid,
      product: req.params.productid,
    });
    if (favorites.length === 0) {
      res.send(false);
    } else {
      res.send(true);
    }
  })
);

favoriteRouter.get(
  '/peruser/:userid',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const favorites = await Favorite.find({
      userFrom: req.params.userid,
    });
    res.send(favorites);
  })
);

favoriteRouter.get(
  '/favoriteproducts/:userid',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const favorites = await Favorite.find({
      userFrom: req.params.userid,
    });
    const fetchData = async () => {
      const favoriteproducts = [];
      for (const item of favorites) {
        const favorite = await Product.findById(item.product._id);
        favoriteproducts.push(favorite);
      }
      return favoriteproducts;
    };
    const data = await fetchData();
    res.send(data);
  })
);

favoriteRouter.delete(
  '/delete/:userid/:productid',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const favorite = await Favorite.findOne({
      userFrom: req.params.userid,
      product: req.params.productid,
    });
    const product = await Favorite.findById(favorite._id);
    if (product) {
      await product.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

module.exports = favoriteRouter;
