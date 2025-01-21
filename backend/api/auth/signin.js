import connectDB from '../../src/config/db';
import adminService from "../../src/services/adminService";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();  // Ensure DB connection
      const token = await adminService.signin(req.body); // Handle signin logic in service
      res.status(200).json({ token }); // Return JWT or session token
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
