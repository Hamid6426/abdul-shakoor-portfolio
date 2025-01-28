// pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'src/lib/dbConnect';
import mongoose from 'mongoose';

// Define a Mongoose model for the "Test" collection
const TestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: 'Test' }  // Ensure this matches the collection name you expect
);

const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect(); // Connect to the database

  if (req.method === 'GET') {
    try {
      console.log('Fetching documents from Test collection...');
      const tests = await Test.find({});
      console.log('Fetched tests:', tests);
      res.status(200).json(tests);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}