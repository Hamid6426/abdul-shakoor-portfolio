import { connectDB, disconnectDB } from './../config/db';
import Admin from '../models/Admin';
import jwt from 'jsonwebtoken';

export const signupAdmin = async (adminData) => {
  await connectDB();
  try {
    const admin = new Admin(adminData);
    await admin.save();
    return admin;
  } finally {
    await disconnectDB();
  }
};

export const signinAdmin = async (email, password) => {
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
