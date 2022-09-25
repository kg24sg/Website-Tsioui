const express = require('express');
const multer = require('multer');
const { v2 } = require('cloudinary');
const streamifier = require('streamifier');
const { isAuth, isAdmin } = require('../utils.js');

const upload = multer();
const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),

  async (req, res) => {
    v2.config({
      cloud_name: 'dokidenub',
      api_key: '498597491436681',
      api_secret: 'HQLOw3gHmOGT0gs9CuhpgZPHPQ8',
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = v2.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  }
);

module.exports = uploadRouter;
