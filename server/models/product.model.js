const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true
    },

    qty: {
      type: Number
    },

    // store in cents
    price: {
      type: Number
    },

    parrot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Parrot'
    },

    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier'
    },

    createdBy: {
      type: String,
      required: true
    },

    avatar: {
      type: String
    }

  },
  {
    collection: 'products'
  }
);

module.exports = mongoose.model('Product', ProductSchema);
