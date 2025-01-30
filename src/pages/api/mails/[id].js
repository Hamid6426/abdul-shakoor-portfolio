import MailRepository from '@/lib/repositories/MailRepository';
import authMiddleware from "@/lib/middlewares/authMiddleware";
import cors from "@/lib/middlewares/cors";

const mailRepo = new MailRepository();

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
          await mailRepo.connect();
          const mail = await mailRepo.getMail(id);
          await mailRepo.disconnect();

          return res.status(200).json({
            success: true,
            data: mail,
          });
        } catch (error) {
          console.error('Error fetching mail:', error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }

      case 'DELETE':
        try {
          await mailRepo.connect();
          await mailRepo.deleteMail(id);
          await mailRepo.disconnect();

          return res.status(200).json({
            success: true,
            message: 'Mail entry deleted successfully'
          });
        } catch (error) {
          console.error('Error deleting mail:', error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }

      default:
        res.setHeader('Allow', ['GET', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
