import { getBlogById, getBlogByIdAndUpdate, getBlogByIdAndDelete } from '../../../lib/services/blogService';

export async function GET(_request, context) {
  const { params } = context; // Extracting the params object from request
  const { id } = params; // Extracting the ID from the URL params

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID not provided' }), { status: 400 });
  }

  try {
    const blog = await getBlogById(id);
    if (blog) {
      return new Response(JSON.stringify(blog), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Mail not found' }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error retrieving blog' }), { status: 500 });
  }
}

export async function PUT(_request, context) {
  const { params, body } = context; // Extracting the params and body objects from request
  const { id } = params; // Extracting the ID from the URL params
  const { read } = await body.json(); // Extracting the read property from the request body

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID not provided' }), { status: 400 });
  }

  try {
    await getBlogByIdAndUpdate(id, { read });
    return new Response(JSON.stringify(updatedBlog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating blog' }), { status: 500 });
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
    await getBlogByIdAndDelete(id);
    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error deleting blog" }), {
      status: 500,
    });
  }
}
