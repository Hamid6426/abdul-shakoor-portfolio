import AdminRepository from '@/lib/repositories/AdminRepository';
import cors from "@/lib/middlewares/cors";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const adminRepo = new AdminRepository();

export default async function handler(req, res) {
  await cors(req, res);
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body;
        console.log('Logging in admin:', { email, password: '******' });

        const admin = await adminRepo.loginAdmin(email, password);
        console.log('Admin logged in:', admin);

        if (!admin.id) {
          throw new Error("Admin login failed");
        }

        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log('Token created:', token); // Log the token to confirm its creation

        return res.status(200).json({ admin, token });
      } catch (error) {
        console.error('Error during login:', error);

        if (error.message === 'Invalid credentials') {
          return res.status(401).json({ error: "Invalid email or password" });
        }

        return res.status(500).json({ error: "Error logging in admin" });
      }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
