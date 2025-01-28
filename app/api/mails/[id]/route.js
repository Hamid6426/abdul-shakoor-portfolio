import { getMailById, getMailByIdAndDelete } from '../../../lib/services/mailService';

export async function GET(_request, context) {
  const { params } = context; // Extracting the params object from request
  const { id } = params; // Extracting the ID from the URL params

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID not provided' }), { status: 400 });
  }

  try {
    const mail = await getMailById(id);
    if (mail) {
      return new Response(JSON.stringify(mail), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Mail not found' }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error retrieving mail' }), { status: 500 });
  }
}

export async function DELETE(_request, context) {
  const { params } = context; // Extracting the params object from request
  const { id } = params; // Extracting the ID from the URL params

  if (!id) {
    return new Response(JSON.stringify({ error: "ID not provided" }), {
      status: 400,
    });
  }

  try {
    await getMailByIdAndDelete(id);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting mail" }), {
      status: 500,
    });
  }
}