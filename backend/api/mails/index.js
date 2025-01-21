import mailService from "../../src/services/mailService";
import connectDB from '../../src/config/db';

export default async function handler(req, res) {
  if (req.method === "GET") {
    await connectDB();

    try {
      await connectDB();
      const mails = await mailService.getAllMails();
      res.json(mails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
