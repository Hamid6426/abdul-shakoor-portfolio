const Blog = require('../models/Blog');

const createBlog = async (blogData) => {
  const blog = new Blog(blogData);
  await blog.save();
  return blog;
};

const getAllBlogs = async () => {
  return await Blog.find();
};

const getBlogById = async (id) => {
  return await Blog.findById(id);
};

const updateBlog = async (id, updateData) => {
  return await Blog.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
