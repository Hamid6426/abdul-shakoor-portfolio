import { getAdminById, getAdminByIdAndUpdate, getAdminByIdAndDelete, getAdminByIdAndPatch } from "@/lib/services/adminService";
import authMiddleware from "@/lib/middlewares/authMiddleware";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Admin ID is required.',
    });
  }

  await cors(req, res);
  
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
          console.error("Error retrieving admin:", error);
          return res.status(500).json({ error: "Error retrieving admin" });
        }

      case 'PUT': // Full update handler
        try {
          const adminData = req.body;

          if (!adminData) {
            return res.status(400).json({ error: 'Missing admin data' });
          }

          const updatedAdmin = await getAdminByIdAndUpdate(id, adminData);
          return res.status(200).json(updatedAdmin);
        } catch (error) {
          console.error("Error updating admin:", error);
          return res.status(500).json({ error: "Error updating admin" });
        }

      case 'PATCH': // Partial update handler
        try {
          if (!id) {
            return res.status(400).json({ message: 'Admin ID is required' });
          }

          const { password, ...updateData } = req.body; // Ensure password is not updated

          const admin = await getAdminByIdAndPatch(id, updateData);

          if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
          }

          return res.status(200).json({ success: true, data: admin });
        } catch (error) {
          console.error('PATCH error:', error);
          return res.status(500).json({ message: 'Server error', error: error.message });
        }

      case 'DELETE':
        try {
          await getAdminByIdAndDelete(id);
          return res.status(204).json({});
        } catch (error) {
          console.error("Error deleting admin:", error);
          return res.status(500).json({ error: "Error deleting admin" });
        }

      default:
        res.setHeader('Allow', ['GET', 'PUT', 'PATCH', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
