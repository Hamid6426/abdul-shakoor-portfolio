import MailRepository from "@/lib/repositories/MailRepository";
import authMiddleware from "@/lib/middlewares/authMiddleware";
import cors from "@/lib/middlewares/cors";

const mailRepo = new MailRepository();

export default async function handler(req, res) {
  await cors(req, res);
  switch (req.method) {
    case "GET":
      await authMiddleware(req, res, async () => {
        try {
          const mails = await mailRepo.getAllMails();
          return res.status(200).json({
            success: true,
            data: mails,
          });
        } catch (error) {
          console.error("Failed to get all mails:", error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }
      });
      break;

    case "POST":
      try {
        const { firstName, lastName, email, subject, message } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !message) {
          return res.status(400).json({ error: "Missing required fields" });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ error: "Invalid email format" });
        }

        // Sanitize input to prevent any injection
        const sanitizedFirstName = firstName.replace(/[^a-zA-Z0-9 ]/g, "");
        const sanitizedLastName = lastName.replace(/[^a-zA-Z0-9 ]/g, "");
        const sanitizedMessage = message.replace(/[^a-zA-Z0-9 .,!?'"]/g, "");

        await mailRepo.createMail({
          firstName: sanitizedFirstName,
          lastName: sanitizedLastName,
          email,
          subject,
          message: sanitizedMessage,
        });

        return res.status(201).json({
          success: true,
          message: 'Mail entry created successfully'
        });
      } catch (error) {
        console.error("Mail creation error:", error);
        return res.status(500).json({ error: error.message });
      }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
