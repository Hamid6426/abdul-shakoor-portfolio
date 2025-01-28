// lib/addTestData.ts
import mongoose from 'mongoose';
import dbConnect from './dbConnect';

const TestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Test = mongoose.models.Test || mongoose.model('Test', TestSchema);

async function addTestData() {
  await dbConnect();

  const newTestData = [
    { name: 'Test 1', description: 'This is a test entry' },
    { name: 'Test 2', description: 'This is another test entry' },
  ];

  await Test.insertMany(newTestData);
  console.log('Test data added!');
}

addTestData().catch((error) => console.error('Error adding test data:', error));
