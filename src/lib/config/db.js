import { Pool } from '@vercel/postgres';

let cached = global.pgPool;

if (!cached) {
  cached = global.pgPool = { conn: null, promise: null, timeout: null };
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
    cached.promise = new Pool({
      connectionString: process.env.NEON_DATABASE_URL,
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 10000 // close idle clients after 30 seconds
    }).connect().then((pool) => {
      return pool;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

const disconnectDB = async (delay = 10000) => {
  if (cached.conn) {
    cached.timeout = setTimeout(async () => {
      await cached.conn.end();
      cached.conn = null;
      cached.promise = null;
      console.log('Database connection closed after delay');
    }, delay);
  }
};

export { connectDB, disconnectDB };
