import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from 'src/services/adminServices';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
const JWT_SECRET = process.env.JWT_SECRET || "abcdefgh12345678abcdefgh12345678";  // Use environment variables for secrets
if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Fetch admin by email
      const admin = await adminServices.getAdminByEmail(email);
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password.',
        });
      }

      // Compare the hashed password with the provided one
      const isPasswordMatch = await bcrypt.compare(password, admin.password);
      if (!isPasswordMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password.',
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: admin._id, email: admin.email },
        JWT_SECRET,
        { expiresIn: '1h' } // Token expires in 1 hour
      );

      return res.status(200).json({
        success: true,
        message: 'Login successful!',
        data: { token },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error.',
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
    });
  }
}
