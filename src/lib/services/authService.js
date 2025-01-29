import { connectDB, disconnectDB } from './../config/db';
import Admin from '../models/Admin';
import jwt from 'jsonwebtoken';

export const registerAdmin = async (adminData) => {
  await connectDB();
  try {
    const admin = new Admin(adminData);
    await admin.save();
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Admin registered successfully:", admin);
    return { admin, token };
  } finally {
    await disconnectDB();
  }
};

export const loginAdmin = async (email, password) => {
  await connectDB();
  try {
    const admin = await Admin.findOne({ email });
    if (admin && (await admin.comparePassword(password))) {
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return token;
    } else {
      throw new Error('Invalid credentials');
    }
  } finally {
    await disconnectDB();
  }
};
