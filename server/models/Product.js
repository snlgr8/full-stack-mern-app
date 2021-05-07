const { model, Schema } = require('mongoose');

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    boughtPrice: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    rating: {
      type: Number,
    },
    subtype: [
      {
        type: String,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true }
);

module.exports = model('Product', ProductSchema);
