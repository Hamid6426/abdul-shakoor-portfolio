import mailService from "../../src/services/mailService";
import connectDB from "../../../src/config/db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      await connectDB();

      const deletedMail = await mailService.deletemail(id);
      if (!deletedMail) {
        return res.status(404).json({ message: "Mail not found" });
      }
      res.json({ message: "Mail deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
