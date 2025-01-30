import AdminRepository from '@/lib/repositories/adminRepository';
import cors from "@/lib/middlewares/cors";
import jwt from 'jsonwebtoken';  // Import jwt here

const adminRepo = new AdminRepository();

export default async function handler(req, res) {
  await cors(req, res);
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = req.body;
        const admin = await adminRepo.loginAdmin(email, password);
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token });
      } catch (error) {
        return res.status(500).json({ error: "Error logging in admin" });
      }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
