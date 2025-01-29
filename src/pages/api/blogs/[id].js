import { getBlogById, getBlogByIdAndUpdate, getBlogByIdAndDelete } from "@/lib/services/blogService";
import authMiddleware from "@/lib/middlewares/authMiddleware";

export default async function handler(req, res) {
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
        const blog = await getBlogById(id); // Pass the id to getBlogById function
        return res.status(200).json({
          success: true,
          data: blog,
        });
      } catch (error) {
        console.error('Error fetching blog:', error); // Log the error for debugging
        return res.status(500).json({
          success: false,
          message: error.message, // Return the actual error message
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

          const updatedBlog = await getBlogByIdAndUpdate(id, {
            title: sanitizedTitle,
            content: sanitizedContent,
          });

          return res.status(200).json({
            success: true,
            data: updatedBlog,
          });
        } catch (error) {
          console.error('Error updating blog:', error); // Log the error for debugging
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      });
      break; // Ensure the PUT case does not fall through
    case 'DELETE':
      await authMiddleware(req, res, async () => {
        try {
          const deletedBlog = await getBlogByIdAndDelete(id);
          return res.status(200).json({
            success: true,
            data: deletedBlog,
          });
        } catch (error) {
          console.error('Error deleting blog:', error); // Log the error for debugging
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      });
      break; // Ensure the DELETE case does not fall through
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
