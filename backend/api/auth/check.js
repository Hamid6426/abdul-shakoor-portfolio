import connectDB from '../../src/config/db';
import adminService from "../../src/services/adminService";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectDB();  // Ensure DB is connected
      const isValid = await adminService.verifyToken(req.query.token);  // Verify token logic
      res.status(200).json({ isValid });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
