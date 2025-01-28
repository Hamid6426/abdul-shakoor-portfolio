import { getAllBlogs } from '../../lib/services/blogService';

export async function GET() {
  try {
    const blogs = await getAllBlogs();
    if (blogs.length > 0) {
      return new Response(JSON.stringify(blogs), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: "No blogs created yet" }), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error retrieving blogs" }), { status: 500 });
  }
}
