import { signinAdmin } from '../../../lib/services/authService';

export async function POST(request) {
  try {
    const { email, password } = await request.json(); // Extract email and password from the request body
    const token = await signinAdmin(email, password);
    return new Response(JSON.stringify({ token }), { status: 200 }); // Return the token with status 200
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 }); // Return 401 for invalid credentials
  }
}