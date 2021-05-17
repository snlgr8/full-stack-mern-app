const { model, Schema } = require('mongoose');
const Product = require('./Product');

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
      data: Buffer,
      contentType: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

CategorySchema.pre('deleteOne', async function () {
  let deletedItemId =
    this._conditions && this._conditions._id ? this._conditions._id : null;
  if (deletedItemId) {
    await Product.deleteMany({
      category: deletedItemId,
    });
  }
});

module.exports = model('Category', CategorySchema);
