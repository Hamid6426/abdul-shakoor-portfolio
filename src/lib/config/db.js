import mongoose from 'mongoose';

let isConnected; // Global variable to track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    isConnected = true;
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error.message);
    throw new Error('Error connecting to the database');
  }
};

const disconnectDB = async () => {
  if (!isConnected) {
    console.log('No active database connection to close');
    return;
  }

  try {
    await mongoose.connection.close();
    isConnected = false;
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing the database connection', error.message);
    throw new Error('Error closing the database connection');
  }
};

export { connectDB, disconnectDB };
