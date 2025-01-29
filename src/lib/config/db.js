import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, timeout: null };
}

const connectDB = async () => {
  if (cached.conn) {
    // Clear any scheduled disconnection
    if (cached.timeout) {
      clearTimeout(cached.timeout);
      cached.timeout = null;
    }
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

const disconnectDB = async (delay = 10000) => {
  if (cached.conn) {
    cached.timeout = setTimeout(async () => {
      await mongoose.connection.close();
      cached.conn = null;
      cached.promise = null;
      console.log('Database connection closed after delay');
    }, delay);
  }
};

export { connectDB, disconnectDB };
