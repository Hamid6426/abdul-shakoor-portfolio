import { getAllMails } from '../../lib/services/mailService';

export async function GET() {
  try {
    const mails = await getAllMails();
    if (mails.length > 0) {
      return new Response(JSON.stringify(mails), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "No mails created yet" }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error retrieving mails" }), { status: 500 });
  }
}
