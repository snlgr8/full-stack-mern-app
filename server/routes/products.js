const router = require('express').Router();
const upload = require('../utils/imageUpload');
const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require('../utils/Products');

/**
 * @DESC Get all products
 */
router.get('/', async (req, res) => {
  await getProducts(req, res);
});

/**
 * @DESC Pass products all fields
 *  */
router.post('/addProduct', upload.single('image'), async (req, res) => {
  await addProduct(req, res);
});
/**
 * @DESC Delete product based on id
 */
router.post('/deleteProduct', async (req, res) => {
  await deleteProduct(req.body, res);
});
/**
 * @DESC Update category based on id , and pass all the category fields
 */
router.post('/updateProduct', async (req, res) => {
  await updateProduct(req.body, res);
});
module.exports = router;
