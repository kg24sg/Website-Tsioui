const mongoose = require('mongoose');

const productSizesSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    quantity: {
      price: { type: Number, required: false },
    },
  },
  {
    timestamps: true,
  }
);

const productSizes = mongoose.model('productSizes', productSizesSchema);
module.exports = productSizes;
