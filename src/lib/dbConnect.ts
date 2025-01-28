// lib/dbConnect.ts
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || "placeholder = mongodb://127.0.0.1:27017/";

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable.");
}

let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Avoid buffering commands if not connected
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).catch((error) => {
      console.error('Failed to connect to MongoDB:', error);
      throw new Error('MongoDB connection failed');
    });
  }

  cached.conn = await cached.promise;

  // Log success
  if (cached.conn) {
    console.log('MongoDB connected successfully!');
  }

  return cached.conn;
}
