export async function GET() {
  return Response.json({ message: 'GET route works!' });
}

export async function POST() {
  return Response.json({ message: 'POST route works!' });
}
