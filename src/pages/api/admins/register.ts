import type { NextApiRequest, NextApiResponse } from 'next';
import * as adminServices from 'src/services/adminServices';
import bcrypt from 'bcryptjs';
import dbConnect from 'src/lib/dbConnect';

// Ensure connection is made when the model is used
await dbConnect(); 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password, fullName } = req.body;

      // Check if the email is already taken
      const existingAdmin = await adminServices.getAdminByEmail(email);
      if (existingAdmin) {
        return res.status(400).json({
          success: false,
          message: 'Email is already in use.',
        });
      }

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create admin
      const adminData = {
        email,
        password: hashedPassword,
        fullName,
      };
      const admin = await adminServices.createAdmin(adminData);

      return res.status(201).json({
        success: true,
        message: 'Admin created successfully!',
        data: admin,
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
