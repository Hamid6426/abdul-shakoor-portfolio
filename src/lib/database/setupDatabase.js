const connectDB = require("./../config/db");

const createTables = async () => {
  try {
    const db = connectDB(); // Call the function to get a connection

    // Create admin table
    await db`
      CREATE TABLE IF NOT EXISTS admin (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now()
      );
    `;

    // Create blog table
    await db`
      CREATE TABLE IF NOT EXISTS blog (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        thumbnail VARCHAR(255) NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        slug VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now(),
        updated_at TIMESTAMPTZ
      );
    `;

    // Create mail table
    await db`
      CREATE TABLE IF NOT EXISTS mail (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        send_at TIMESTAMPTZ DEFAULT now()
      );
    `;

    console.log("Tables created successfully");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
};

createTables().catch((err) => console.error("Unexpected error:", err));
