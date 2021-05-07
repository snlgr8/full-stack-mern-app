const {
  getCategories,
  deleteCategory,
  updateCategory,
  addCategory,
  getSubtype,
  deleteCategoryAndProducts,
} = require('../utils/Categories');

const router = require('express').Router();
const upload = require('../utils/imageUpload');

/**
 * @DESC Get all Categories
 */
router.get('/', async (req, res) => {
  await getCategories(req, res);
});

/**
 * @DESC Pass Categories all fields
 *  */
router.post('/addCategory', upload.single('icon'), async (req, res) => {
  await addCategory(req, res);
});
/**
 * @DESC Delete category based on id
 */
router.post('/deleteCategory', async (req, res) => {
  await deleteCategory(req.body, res);
});

router.post('/deleteCategoryAndProducts', async (req, res) => {
  await deleteCategoryAndProducts(req.body, res);
});
/**
 * @DESC Update category based on id , and pass all the category fields
 */
router.post('/updateCategory', async (req, res) => {
  await updateCategory(req.body, res);
});

/**
 * @DESC Get subtype based on category id
 */
router.get('/:id', async (req, res) => {
  await getSubtype(req.params.id, res);
});
module.exports = router;
