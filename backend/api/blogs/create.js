import blogService from '../../src/services/blogService';
import connectDB from '../../src/config/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      
      const blog = await blogService.createBlog(req.body);
      res.status(201).json(blog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
