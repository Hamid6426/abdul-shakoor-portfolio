import { connectDB, disconnectDB } from "../config/db";
import Blog from "../models/Blog";

export const createBlog = async ({
  title,
  thumbnail,
  excerpt,
  content,
  author,
}) => {
  await connectDB();
  try {
    // Function to create a slug from the title
    const createSlug = (title) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    };

    const slug = createSlug(title);

    const newBlog = new Blog({
      title,
      thumbnail,
      excerpt,
      content,
      slug,
      author,
    });

    await newBlog.save();
    return newBlog;
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
