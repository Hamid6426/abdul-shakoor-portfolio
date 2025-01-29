import { connectDB, disconnectDB } from '@/lib/config/db';
import Admin from '@/lib/models/Admin';
import jwt from 'jsonwebtoken'; 

export const registerAdmin = async (adminData) => {
  console.log("Registering admin with data:", adminData); // Log admin data
  await connectDB();
  try {
    const admin = new Admin(adminData);
    await admin.save();
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log("Admin registered successfully:", admin);
    return { admin, token };
  } catch (error) {
    console.error("Error registering admin:", error); // Log any errors
    throw new Error("Error registering admin");
  } finally {
    await disconnectDB();
  }
};
