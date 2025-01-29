import { connectDB, disconnectDB } from '@/lib/config/db';
import Blog from '../../../../lib/models/Blog';

export default async function handler(req, res) {
  connectDB();
  const { slug } = req.query;

  try {
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return res.status(500).json({ error: "Server error" });
  }
  disconnectDB();
}
