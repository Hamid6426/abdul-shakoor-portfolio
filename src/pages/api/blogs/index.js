import BlogRepository from '@/lib/repositories/BlogRepository';
import authMiddleware from "@/lib/middlewares/authMiddleware";
import cors from "@/lib/middlewares/cors";

const blogRepo = new BlogRepository();

export default async function handler(req, res) {
  await cors(req, res);

  switch (req.method) {
    case 'GET':
      try {
        const blogs = await blogRepo.getAllBlogs();
        return res.status(200).json({
          success: true,
          data: blogs,
        });
      } catch (error) {
        console.error('Failed to get all blogs:', error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }

    case 'POST':
      await authMiddleware(req, res, async () => {
        try {
          const { title, thumbnail, excerpt, content, author } = req.body;

          // Basic validation
          if (!title || !thumbnail || !excerpt || !content || !author) {
            return res.status(400).json({ error: 'Missing required fields' });
          }

          // Sanitize input to prevent any injection
          const sanitizedTitle = title.replace(/[^a-zA-Z0-9 ]/g, '');
          const sanitizedThumbnail = thumbnail.replace(/[^a-zA-Z0-9.:/]/g, '');
          const sanitizedExcerpt = excerpt.replace(/[^a-zA-Z0-9 .,!?'"-]/g, '');
          const sanitizedContent = content.replace(/[^a-zA-Z0-9 .,!?'"-]/g, '');
          const sanitizedAuthor = author.replace(/[^a-zA-Z0-9 ]/g, '');

          await blogRepo.createBlog({
            title: sanitizedTitle,
            thumbnail: sanitizedThumbnail,
            excerpt: sanitizedExcerpt,
            content: sanitizedContent,
            author: sanitizedAuthor,
          });

          return res.status(201).json({
            success: true,
            message: 'Blog entry created successfully'
          });
        } catch (error) {
          console.log('Blog creation error:', error);
          return res.status(500).json({ error: error.message });
        }
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
