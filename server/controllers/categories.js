const Category = require('../models/Category');
const Product = require('../models/Product');
const Img = require('../models/Image');
const fs = require('fs');

const getCategories = async (req, res) => {
  const categories = await Category.find();

  return res.send(categories);

  //  return res.status(404).json({ message: 'No data found', success: false });
};
const fetchImage = async (req, res) => {
  await Img.findOne({}, 'img createdAt', function (err, img) {
    if (err) res.send(err);
    res.contentType('json');
    res.send(img);
  }).sort({ createdAt: 'desc' });
};
/* const uploadImage = async (req, res) => {
  var new_img = new Img();
  new_img.img.data = fs.readFileSync(req.file.path);
  new_img.img.contentType = 'image/jpeg';
  new_img.save();
  res.json({ message: 'New image added to the db!' });
}; */

const addCategory = async (req, res) => {
  const { title, subtype, tags } = req.body;
  const categoryFromDb = await Category.findOne({ title });
  if (categoryFromDb) {
    return res
      .status(500)
      .json({ message: 'Category already exists', success: false });
  }

  var newCategory = {
    title,
    subtype,
    tags,
    icon: {
      data: fs.readFileSync(req.file.path),
      contentType: 'image/jpeg',
    },
  };
  Category.create(newCategory, (err, category) => {
    if (err) {
      res.status(500).json({ success: false, message: err });
    } else {
      category
        .save()
        .then(() => {
          return res.status(200).json({
            message: 'Category added',
            success: true,
            category,
          });
        })
        .catch((err) => {
          return res.status(500).json({
            message: 'Unable to add Category',
            success: false,
            body: err.message,
          });
        });
    }
  });
};
const deleteCategory = async (category, res) => {
  const { _id } = category;
  await Category.findByIdAndDelete({ _id })
    .then(() => {
      return res.send(_id);
    })
    .catch((err) => {
      return res.status(500).json({
        message: 'Unable to delete category',
        success: false,
      });
    });
};
const deleteCategoryAndProducts = async (req, res) => {
  const { _id } = req;
  await Category.deleteOne({ _id })
    .then(() => {
      return res.send(_id);
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: 'Unable to delete category', success: false });
    });
};

const getCount = async (req, res) => {
  const allCategories = await Category.find();
  const categoryIds = allCategories.map((category) => {
    return category._id;
  });
  const c = await categoryIds.map(async (category) => ({
    id: category._id,
    count: await getProductCount(category._id),
  }));
  const result = await Promise.all(c);
  res.send(result);
};

const getProductCount = async (id) => {
  return await Product.countDocuments({ category: id });
};
const updateCategory = async (category, res) => {
  const { id } = category;
  Category.findByIdAndUpdate({ _id: id }, category, { new: false })
    .then(() => {
      return res
        .status(200)
        .json({ message: 'Category updated successfully', success: true });
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ message: 'Category not found', success: false });
    });
};
const getSubtype = async (id, res) => {
  Category.findById({ _id: id })
    .select('subtype')
    .then((category) => {
      return res.send(category);
    })
    .catch((err) => {
      return res
        .status(404)
        .json({ message: 'Invalid Category', success: false });
    });
};
module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
  getSubtype,
  deleteCategoryAndProducts,
  getCount,
};
