const { model, schema } = require('mongoose');

const CategoryProduct = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});
