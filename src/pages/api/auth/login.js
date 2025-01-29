import { loginAdmin } from '@/lib/services/authService';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      try {
        const { email, password } = await req.json(); // Extract email and password from the request body
        const token = await loginAdmin(email, password);
        return res.status(200).json({ token }); // Return the token with status 200
      } catch (error) {
        return res.status(401).json({ error: "Invalid credentials" }); // Return 401 for invalid credentials
      }
    default:
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
