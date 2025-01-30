import BlogRepository from '@/lib/repositories/BlogRepository';
import cors from "@/lib/middlewares/cors";

const blogRepo = new BlogRepository();

export default async function handler(req, res) {
  await cors(req, res);
  const { slug } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        await blogRepo.connect();
        const blog = await blogRepo.getBlogBySlug(slug);
        await blogRepo.disconnect();

        if (!blog) {
          return res.status(404).json({ error: "Blog not found" });
        }

        return res.status(200).json(blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
        return res.status(500).json({ error: "Server error" });
      }

    case 'PUT':
      try {
        await blogRepo.connect();
        const updatedBlog = await blogRepo.updateBlogBySlug(slug, req.body);
        await blogRepo.disconnect();

        if (!updatedBlog) {
          return res.status(404).json({ error: "Blog not found" });
        }

        return res.status(200).json(updatedBlog);
      } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({ error: "Server error" });
      }

    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
