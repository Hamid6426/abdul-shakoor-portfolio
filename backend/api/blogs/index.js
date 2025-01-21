import blogService from '../../src/services/blogService';
import connectDB from '../../src/config/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectDB();
      const blogs = await blogService.getAllBlogs();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
