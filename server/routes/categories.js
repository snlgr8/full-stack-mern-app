const {
  getCategories,
  deleteCategory,
  updateCategory,
  addCategory,
} = require("../utils/Categories");

const router = require("express").Router();

/**
 * @DESC Get all Categories
 */
router.get("/", async (req, res) => {
  await getCategories(req, res);
});

/**
 * @DESC Pass Categories all fields
 *  */
router.post("/addCategory", async (req, res) => {
  await addCategory(req.body, res);
});
/**
 * @DESC Delete category based on id
 */
router.post("/deleteCategory", async (req, res) => {
  await deleteCategory(req.body, res);
});
/**
 * @DESC Update category based on id , and pass all the category fields
 */
router.post("/updateCategory", async (req, res) => {
  await updateCategory(req.body, res);
});
module.exports = router;
