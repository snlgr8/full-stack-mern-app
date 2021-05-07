const Product = require('../models/Product');
const fs = require('fs');
const Category = require('../models/Category');
const getProducts = async (req, res) => {
  const products = await Product.find();
  /*  .populate('Category')
    .exec(function (err, category) {
      if (err) return handleError(err);
      console.log(category);
    }); */

  if (products.length > 0) {
    return res.status(200).json(products);
  }
  return res.status(404).json({ message: 'No data found', success: false });
};
const addProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  console.log(req.file);
  const { name } = product;
  const { _id } = await Category.findOne({ title: product.category });
  console.log(_id);
  const productFromDb = await Product.findOne({ name });
  if (productFromDb) {
    return res
      .status(500)
      .json({ message: 'Product already exists', success: false });
  }

  const newProduct = new Product({
    ...product,
    category: _id,
    image: { data: fs.readFileSync(req.file.path), contentType: 'image/jpeg' },
  });
  console.log(newProduct);
  await newProduct
    .save()
    .then(() => {
      return res.status(200).json({
        message: 'Product added',
        success: true,
        body: newProduct._id,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Unable to add product',
        success: false,
        body: err.message,
      });
    });
};

const deleteProduct = async (_id, res) => {
  await Product.findByIdAndDelete(_id)
    .then(() => {
      return res.send(_id);
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Unable to delete Product',
        success: false,
      });
    });
};

const updatProduct = async (product, res) => {
  const { id } = product;
  Product.findByIdAndUpdate({ _id: id }, product, { new: false })
    .then(() => {
      return res
        .status(200)
        .json({ message: 'Product updated successfully', success: true });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ message: 'Product not found', success: false });
    });
};
module.exports = {
  deleteProduct,
  getProducts,
  addProduct,
  updatProduct,
};
