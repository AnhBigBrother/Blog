const Blog = require("../models/blogSchema");
const User = require("../models/userSchema");
const mongoose = require("mongoose");

const getAllBlogs = async (req, res) => {
  try {
    const { page } = req.query;
    const blogFound = await Blog.find()
      .skip(page * 20)
      .limit(20)
      .sort({ createdAt: -1 });
    res.status(200).json({ blog_found: blogFound, page: page });
  } catch (err) {
    res.status(400).json({ errors: err.message });
  }
};
const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("type of id parameter is not valid");
    }
    console.log(id);
    const blogFound = await Blog.findById(id);
    res.json({ blog_found: blogFound });
  } catch (err) {
    res.status(400).json({ errors: err.message });
  }
};
const createBlog = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw new Error("request's body is required");
    }
    let blog = await Blog.create(req.body);
    let user = await User.findOne({ name: req.body.author });
    user.blogs.push(blog._id);
    user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ errors: err.message });
  }
};
const editBlog = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("type of id parameter is not valid");
    }
    if (Object.keys(req.body).length === 0) {
      throw new Error("request's body is required");
    }
    const blogFound = await Blog.findById(id);
    if (req.body.body) {
      blogFound.body = req.body.body;
    }
    if (req.body.snippet) {
      blogFound.snippet = req.body.snippet;
    }
    blogFound.save();
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ errors: err.message });
  }
};

module.exports = { getAllBlogs, getBlog, createBlog, editBlog };
