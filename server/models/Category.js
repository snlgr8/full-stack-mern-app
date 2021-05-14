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

module.exports = model('Category', CategorySchema);

CategorySchema.pre('deleteOne', function (next) {
  var category = this;
  console.log('In pre---------');
  /*  category
    .model('Product')
    .deleteOne({ category: category._id }, function (err, product) {
      if (err) {
        console.log(err);
        next(err);
      }
      console.log(product);
      next();
    }); */
});
