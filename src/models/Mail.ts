// src/models/Mail.ts
import mongoose, { Document, Schema, Model, ObjectId } from "mongoose";
import dbConnect from 'src/lib/dbConnect';

// Ensure connection is made when the model is used
await dbConnect(); 

export interface IMail extends Document {
  _id: ObjectId;
  firstName?: string;
  lastName?: string;
  email: string;
  subject?: string;
  message?: string;
}

const mailSchema = new Schema<IMail>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  subject: { type: String, required: false },
  message: { type: String, required: false },
}, {
  timestamps: true,
});

const Mail: Model<IMail> = mongoose.models.Mail || mongoose.model<IMail>('Mail', mailSchema);

export default Mail;
