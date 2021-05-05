const {
  getCategories,
  deleteCategory,
  updateCategory,
  addCategory,
  getSubtype,
} = require('../utils/Categories');

const router = require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});
const upload = multer({ storage: storage });

/**
 * @DESC Get all Categories
 */
router.get('/', async (req, res) => {
  await getCategories(req, res);
});

/* router.post('/uploadImage', upload.single('file'), async (req, res) => {
  await uploadImage(req, res);
});
router.get('/fetchImage', async (req, res) => {
  await fetchImage(req, res);
}); */
/**
 * @DESC Pass Categories all fields
 *  */
router.post('/addCategory', upload.single('file'), async (req, res) => {
  await addCategory(req, res);
});
/**
 * @DESC Delete category based on id
 */
router.post('/deleteCategory', async (req, res) => {
  await deleteCategory(req.body, res);
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
