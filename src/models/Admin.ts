// src/models/Admin.ts
import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";
import dbConnect from 'src/lib/dbConnect';

// Ensure connection is made when the model is used
await dbConnect(); 

export interface IAdmin extends Document {
  _id: ObjectId;
  fullName: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpiresAt?: Date;
}

// Define the schema for the Admin model
const adminSchema = new Schema<IAdmin>(
  {
    fullName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false, required: true },
    passwordResetToken: { type: String, required: false },
    passwordResetExpiresAt: { type: Date, required: false },
  },
  {
    timestamps: true,
  }
);

// Ensure that Mongoose model is connected to MongoDB before any queries are made
const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;
