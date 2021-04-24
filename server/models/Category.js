const { model, Schema } = require('mongoose');

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtype: [
      {
        type: String,
      },
    ],
    icon: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('Category', CategorySchema);
