import BlogRepository from '@/lib/repositories/blogRepository';
import authMiddleware from "@/lib/middlewares/authMiddleware";
import cors from "@/lib/middlewares/cors";

const blogRepo = new BlogRepository();

export default async function handler(req, res) {
  await cors(req, res);
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Blog ID is required.',
    });
  }

  switch (req.method) {
    case 'GET':
      try {
        await blogRepo.connect();
        const blog = await blogRepo.getBlog(id);
        await blogRepo.disconnect();

        return res.status(200).json({
          success: true,
          data: blog,
        });
      } catch (error) {
        console.error('Error fetching blog:', error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }

    case 'PUT': // Update handler
      await authMiddleware(req, res, async () => {
        try {
          const { title, content } = req.body;

          // Basic validation
          if (!title || !content) {
            return res.status(400).json({ error: 'Missing required fields' });
          }

          // Sanitize input to prevent any injection
          const sanitizedTitle = title.replace(/[^a-zA-Z0-9 ]/g, '');
          const sanitizedContent = content.replace(/[^a-zA-Z0-9 .,!?'"-]/g, '');

          await blogRepo.connect();
          const updatedBlog = await blogRepo.updateBlog(id, {
            title: sanitizedTitle,
            content: sanitizedContent,
          });
          await blogRepo.disconnect();

          return res.status(200).json({
            success: true,
            data: updatedBlog,
          });
        } catch (error) {
          console.error('Error updating blog:', error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      });
      break;

    case 'DELETE':
      await authMiddleware(req, res, async () => {
        try {
          await blogRepo.connect();
          await blogRepo.deleteBlog(id);
          await blogRepo.disconnect();

          return res.status(200).json({
            success: true,
            message: 'Blog entry deleted successfully'
          });
        } catch (error) {
          console.error('Error deleting blog:', error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      });
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
