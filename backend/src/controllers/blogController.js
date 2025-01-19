const blogService = require('../services/blogService');

const createBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await blogService.updateBlog(req.params.id, req.body);
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogService.deleteBlog(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
