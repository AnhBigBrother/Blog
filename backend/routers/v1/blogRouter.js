const router = require("express").Router();
const controller = require("../../controllers/blogController");

router.route("/").get(controller.getAllBlogs).post(controller.createBlog);
router.route("/:id").get(controller.getBlog).patch(controller.editBlog);

module.exports = router;
