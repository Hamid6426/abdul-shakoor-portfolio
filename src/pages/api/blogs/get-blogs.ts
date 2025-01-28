import { NextApiRequest, NextApiResponse } from 'next';
import * as blogServices from 'src/services/blogServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const blogs = await blogServices.getAllBlogs();
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  } else {
    // Method not allowed for other HTTP methods
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
