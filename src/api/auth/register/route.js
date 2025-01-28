import { signupAdmin } from "../../../lib/services/authService";

export async function POST(request) {
  try {
    const adminData = await request.json(); // Extracting the admin data from the request body
    const newAdmin = await signupAdmin(adminData);
    return new Response(JSON.stringify(newAdmin), { status: 201 }); // Returning the new admin with status 201
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating admin" }), { status: 500 });
  }
}
