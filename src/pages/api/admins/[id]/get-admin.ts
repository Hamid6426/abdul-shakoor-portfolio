import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from 'src/services/adminServices';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secretKey = process.env.JWT_SECRET || 'your-secret-key';
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      // 1. Extract and verify the token
      const token = req.headers.authorization?.split(' ')[1]; // Get the Bearer token from headers
      if (!token) {
        return res.status(401).json({ success: false, message: 'Token is required' });
      }

      const decoded: any = jwt.verify(token, secretKey); // Verify and decode the token
      if (!decoded || decoded._id !== id) {
        return res.status(403).json({ success: false, message: 'Unauthorized access' });
      }

      // 2. Fetch admin data from the database
      const admin = await adminServices.getAdminById(id as string);
      if (!admin) {
        return res.status(404).json({ success: false, message: 'Admin not found' });
      }

      // 3. Return the admin data
      return res.status(200).json({ success: true, data: admin });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server Error' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
