import connectDB from '../../src/config/db';
import adminService from "../../src/services/adminService";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB(); // Ensure DB is connected
      const user = await adminService.signup(req.body);  // Handle signup logic in service
      res.status(201).json(user); // Return user data or token
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
