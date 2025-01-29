import { getAdminById, getAdminByIdAndUpdate, getAdminByIdAndDelete } from "@/lib/services/adminService";
import authMiddleware from "@/lib/middlewares/authMiddleware";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Admin ID is required.',
    });
  }

  await authMiddleware(req, res, async () => {
    switch (req.method) {
      case 'GET':
        try {
          const admin = await getAdminById(id);
          if (admin) {
            return res.status(200).json(admin);
          } else {
            return res.status(404).json({ error: "Admin not found" });
          }
        } catch (error) {
          return res.status(500).json({ error: "Error retrieving admin" });
        }
      case 'PUT': // Update handler
        try {
          const adminData = req.body;

          // Basic validation
          if (!adminData) {
            return res.status(400).json({ error: 'Missing admin data' });
          }

          const updatedAdmin = await getAdminByIdAndUpdate(id, adminData);
          return res.status(200).json(updatedAdmin);
        } catch (error) {
          return res.status(500).json({ error: "Error updating admin" });
        }
      case 'DELETE':
        try {
          await getAdminByIdAndDelete(id);
          return res.status(204).json({});
        } catch (error) {
          return res.status(500).json({ error: "Error deleting admin" });
        }
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
