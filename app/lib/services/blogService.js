import { connectDB, disconnectDB } from './../config/db';
import Blog from '../models/Blog';

export const createBlog = async (blogData) => {
  await connectDB();
  try {
    const blog = new Blog(blogData);
    await blog.save();
    return blog;
  } finally {
    await disconnectDB();
  }
};

export const getAllBlogs = async () => {
  await connectDB();
  try {
    const blogs = await Blog.find();
    return blogs;
  } finally {
    await disconnectDB();
  }
};

export const getBlogById = async (id) => {
  await connectDB();
  try {
    const blog = await Blog.findById(id);
    return blog;
  } finally {
    await disconnectDB();
  }
};

export const getBlogByIdAndUpdate = async (id, blogData) => {
  await connectDB();
  try {
    const blog = await Blog.findByIdAndUpdate(id, blogData, { new: true });
    return blog;
  } finally {
    await disconnectDB();
  }
};

export const getBlogByIdAndDelete = async (id) => {
  await connectDB();
  try {
    await Blog.findByIdAndDelete(id);
  } finally {
    await disconnectDB();
  }
};
