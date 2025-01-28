import Blog, { IBlog } from '../models/Blog';

export const createBlog = async (blogData: Partial<IBlog>): Promise<IBlog> => {
  const blog = new Blog(blogData);
  return await blog.save();
};

export const getBlogById = async (id: string): Promise<IBlog | null> => {
  return await Blog.findById(id);
};

export const getAllBlogs = async (): Promise<IBlog[]> => {
  return await Blog.find();
};

export const updateBlog = async (id: string, updateData: Partial<IBlog>): Promise<IBlog | null> => {
  return await Blog.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteBlog = async (id: string): Promise<IBlog | null> => {
  return await Blog.findByIdAndDelete(id);
};

export const publishBlog = async (id: string): Promise<IBlog | null> => {
  return await Blog.findByIdAndUpdate(id, { published: true }, { new: true });
};

export const unpublishBlog = async (id: string): Promise<IBlog | null> => {
  return await Blog.findByIdAndUpdate(id, { published: false }, { new: true });
};
