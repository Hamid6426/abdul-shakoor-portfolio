import { createBlog, getAllBlogs } from "@/lib/services/blogService";
import authMiddleware from "@/lib/middlewares/authMiddleware";

export default async function handler(req, res) {
  await cors(req, res);
  switch (req.method) {
    case 'GET':
      try {
        const blogs = await getAllBlogs();
        return res.status(200).json({
          success: true,
          data: blogs,
        });
      } catch (error) {
        console.error('Failed to get all blogs:', error); // Log the error for debugging
        return res.status(500).json({
          success: false,
          message: error.message, // Return the actual error message
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

          // Creating blog
          const blog = await createBlog({
            title: sanitizedTitle,
            thumbnail: sanitizedThumbnail,
            excerpt: sanitizedExcerpt,
            content: sanitizedContent,
            author: sanitizedAuthor,
          });

          return res.status(201).json(blog);
        } catch (error) {
          console.log('Blog creation error:', error); // Logging the error for debugging
          return res.status(500).json({ error: error.message });
        }
      });
      break; // Ensure the POST case does not fall through
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
