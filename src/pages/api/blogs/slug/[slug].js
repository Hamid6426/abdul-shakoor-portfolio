import { connectDB, disconnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';

export default async function handler(req, res) {
  await cors(req, res);
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      await connectDB();
      const blog = await Blog.findOne({ slug });

      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      return res.status(200).json(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      return res.status(500).json({ error: "Server error" });
    } finally {
      await disconnectDB();
    }
  } else if (req.method === 'PUT') {
    try {
      await connectDB();
      const updatedBlog = await Blog.findOneAndUpdate(
        { slug }, // Find blog by slug
        req.body, // Update with the provided data
        { new: true } // Return the updated blog
      );

      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }

      return res.status(200).json(updatedBlog);
    } catch (error) {
      console.error("Error updating blog:", error);
      return res.status(500).json({ error: "Server error" });
    } finally {
      await disconnectDB();
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
