import blogService from '../../src/services/blogService';
import connectDB from '../../../src/config/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    try {
      await connectDB();
      
      const updatedBlog = await blogService.updateBlog(id, req.body);
      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(updatedBlog);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
