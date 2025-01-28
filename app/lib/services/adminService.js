import { connectDB, disconnectDB } from './../config/db';
import Admin from '../models/Admin';

export const getAllAdmins = async () => {
  await connectDB();
  try {
    const admins = await Admin.find();
    return admins;
  } finally {
    await disconnectDB();
  }
};

export const getAdminById = async (id) => {
  await connectDB();
  try {
    const admin = await Admin.findById(id);
    return admin;
  } finally {
    await disconnectDB();
  }
};

export const getAdminByIdAndUpdate = async (id, adminData) => {
  await connectDB();
  try {
    const admin = await Admin.findByIdAndUpdate(id, adminData, { new: true });
    return admin;
  } finally {
    await disconnectDB();
  }
};

export const getAdminByIdAndDelete = async (id) => {
  await connectDB();
  try {
    await Admin.findByIdAndDelete(id);
  } finally {
    await disconnectDB();
  }
};


