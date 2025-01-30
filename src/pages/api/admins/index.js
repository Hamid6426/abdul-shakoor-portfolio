import AdminRepository from '@/lib/repositories/adminRepository';
import authMiddleware from "@/lib/middlewares/authMiddleware";
import cors from "@/lib/middlewares/cors";

const adminRepo = new AdminRepository();

export default async function handler(req, res) {
  await cors(req, res);
  await authMiddleware(req, res, async () => {
    switch (req.method) {
      case 'GET':
        try {
          const admins = await adminRepo.getAllAdmins();
          if (admins.length > 0) {
            return res.status(200).json(admins);
          } else {
            return res.status(404).json({ error: "No admins created yet" });
          }
        } catch (error) {
          return res.status(500).json({ error: "Error retrieving admins" });
        }
      default:
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
