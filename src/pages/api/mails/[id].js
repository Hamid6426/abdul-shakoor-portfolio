import { getMailById, getMailByIdAndDelete } from "@/lib/services/mailService";
import authMiddleware from "@/lib/middlewares/authMiddleware";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: 'Mail ID is required.',
    });
  }

  await authMiddleware(req, res, async () => {
    await cors(req, res);
    switch (req.method) {
      case 'GET':
        try {
          const mail = await getMailById(id); // Pass the id to getMailById function
          return res.status(200).json({
            success: true,
            data: mail,
          });
        } catch (error) {
          console.error('Error fetching mail:', error); // Log the error for debugging
          return res.status(500).json({
            success: false,
            message: error.message, // Return the actual error message
          });
        }
      case 'DELETE':
        try {
          const deletedMail = await getMailByIdAndDelete(id);
          return res.status(200).json({
            success: true,
            data: deletedMail,
          });
        } catch (error) {
          console.error('Error deleting mail:', error); // Log the error for debugging
          return res.status(500).json({
            success: false,
            message: error.message, // Return the actual error message
          });
        }
      default:
        res.setHeader('Allow', ['GET', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
