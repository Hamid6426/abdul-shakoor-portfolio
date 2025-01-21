import mailService from "../../src/services/mailService";
import connectDB from '../../src/config/db';

export default async function createMail(req, res) {
  try {
    await connectDB();

    const mail = await mailService.createMail(req.body);
    res.status(201).json(mail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
