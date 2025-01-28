import { createMail } from "../../../lib/services/mailService";

export async function POST(request) {
  try {
    const mailData = await request.json(); // Extracting the mail data from the request body
    const newMail = await createMail(mailData);
    return new Response(JSON.stringify(newMail), { status: 201 }); // Returning the new mail with status 201
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error creating mail" }), { status: 500 });
  }
}
