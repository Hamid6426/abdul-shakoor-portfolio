import { loginAdmin } from '@/lib/services/authService';

export default async function handler(req, res) {
  await cors(req, res);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Call the login service
    const token = await loginAdmin(email, password);

    // Return the token on successful login
    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ error: error.message });
  }
}
