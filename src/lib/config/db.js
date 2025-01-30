const { neon } = require("@neondatabase/serverless");

if (!process.env.NEON_DATABASE_URL) {
  throw new Error("❌ NEON_DATABASE_URL is missing! Check your .env.local file.");
}

const connectDB = () => neon(process.env.NEON_DATABASE_URL);

module.exports = connectDB;

// The DB script require dotenv because the next is not running

// require("dotenv").config(); // Load environment variables

// const { neon } = require("@neondatabase/serverless");

// const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL;

// if (!NEON_DATABASE_URL) {
//   throw new Error("❌ No database connection string found! Check your .env file.");
// }

// const connectDB = () => neon(NEON_DATABASE_URL);

// module.exports = connectDB;
