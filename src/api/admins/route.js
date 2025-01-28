import { getAllAdmins } from '../../lib/services/adminService';

export async function GET() {
  try {
    const admins = await getAllAdmins();
    if (admins.length > 0) {
      return new Response(JSON.stringify(admins), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "No admins created yet" }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error retrieving admins" }), { status: 500 });
  }
}
