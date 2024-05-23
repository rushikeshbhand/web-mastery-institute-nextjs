import dbConnect from '../../utils/db';
import Contact from '../../models/contact';

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const contact = await Contact.create(body);
    return new Response(JSON.stringify({ success: true, data: contact }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
