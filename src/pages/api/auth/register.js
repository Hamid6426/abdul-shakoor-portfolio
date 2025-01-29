import { registerAdmin } from '@/lib/services/authService';
import cors from "@/lib/middlewares/cors";

export default async function handler(req, res) {
  await cors(req, res);
  try {
    const { fullName, email, password } = req.body;
    // Basic validation
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const sanitizedFullName = fullName.replace(/[^a-zA-Z0-9 ]/g, "");

    const admin = await registerAdmin({
      fullName: sanitizedFullName,
      email,
      password
    });

    return res.status(201).json(admin);
  } catch (error) {
    console.error("Error registering admin:", error);
    return res.status(500).json({ error: error.message });
  }
};