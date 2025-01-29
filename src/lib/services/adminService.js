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

export const getAdminByIdAndPatch = async (id, updateData) => {
  try {
    if (!id || typeof updateData !== 'object' || Object.keys(updateData).length === 0) {
      throw new Error('Invalid input data');
    }

    // Prevent updating the password through this function
    if (updateData.password) {
      throw new Error('Password update is not allowed via this function');
    }

    const patchedAdmin = await Admin.findByIdAndUpdate( // findByIdAndUpdate = internal function
      id,
      { $set: updateData },
      { new: true, runValidators: true } // Ensures data validation
    ).lean(); // Optional: Converts Mongoose object to plain JavaScript object

    if (!patchedAdmin) {
      throw new Error('Admin not found');
    }

    return patchedAdmin;
  } catch (error) {
    console.error('Error patching admin data:', error);
    throw new Error(error.message || 'Error patching admin data');
  }
};


