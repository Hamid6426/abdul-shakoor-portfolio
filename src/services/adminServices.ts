import Admin, { IAdmin } from 'src/models/Admin';
import dbConnect from 'src/lib/dbConnect'; // Importing dbConnect

// Ensure dbConnect is called before any query
dbConnect();

export const createAdmin = async (adminData: Partial<IAdmin>): Promise<IAdmin> => {
  const admin = new Admin(adminData);
  return await admin.save();
};

export const getAdminById = async (id: string): Promise<IAdmin | null> => {
  return await Admin.findById(id);
};

export const getAdminByEmail = async (email: string): Promise<IAdmin | null> => {
  return await Admin.findOne({ email }).select('+password'); // Include password for login
};

export const updateAdmin = async (id: string, updateData: Partial<IAdmin>): Promise<IAdmin | null> => {
  return await Admin.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteAdmin = async (id: string): Promise<IAdmin | null> => {
  return await Admin.findByIdAndDelete(id);
};

export const setPasswordResetToken = async (
  email: string,
  token: string,
  expiresAt: Date
): Promise<IAdmin | null> => {
  return await Admin.findOneAndUpdate(
    { email },
    {
      passwordResetToken: token,
      passwordResetExpiresAt: expiresAt,
    },
    { new: true }
  );
};

export const verifyPasswordResetToken = async (email: string, token: string): Promise<IAdmin | null> => {
  const admin = await Admin.findOne({
    email,
    passwordResetToken: token,
    passwordResetExpiresAt: { $gt: new Date() }, // Check if token is still valid
  });
  return admin;
};
