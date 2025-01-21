import mailService from "../../src/services/mailService";
import connectDB from '../../src/config/db';

export default async function getMailById(req, res) {
  try {
    await connectDB();

    const mail = await mailService.getMailById(req.query.id);
    if (!mail) {
      return res.status(404).json({ message: "Mail not found" });
    }
    res.json(mail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
