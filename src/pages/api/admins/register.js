import AdminRepository from '@/lib/repositories/AdminRepository';
import cors from "@/lib/middlewares/cors";

const adminRepo = new AdminRepository();

export default async function handler(req, res) {
  await cors(req, res);
  switch (req.method) {
    case 'POST':
      try {
        const adminData = req.body;
        console.log('Registering admin:', adminData); // Debug log
        
        const admin = await adminRepo.registerAdmin(adminData);
        console.log('Admin registered:', admin); // Debug log
        
        if (!admin.id) {
          throw new Error("Admin registration failed");
        }

        return res.status(201).json({ admin });
      } catch (error) {
        console.error('Error during registration:', error); // Error log

        // Specific error handling for unique constraint violation
        if (error.code === '23505') {  // Assuming Postgres, for unique constraint violation
          return res.status(400).json({ error: "Email already exists" });
        }
        
        return res.status(500).json({ error: "Error registering admin" });
      }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
