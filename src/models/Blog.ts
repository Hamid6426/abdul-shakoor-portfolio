// src/models/Blog.ts
import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";
import dbConnect from 'src/lib/dbConnect';

// Ensure connection is made when the model is used
await dbConnect(); 

export interface IBlog extends Document {
  _id: ObjectId;
  title: string;
  mainHeading: string;
  subHeadingOne: string;
  subHeadingTwo: string;
  paragraphOne: string;
  paragraphTwo: string;
  imageLink: string;
  imageCaption: string;
  author: string;
  published: boolean;
}

const blogSchema = new Schema({
  title: { type: String },
  mainHeading: { type: String },
  subHeadingOne: { type: String },
  subHeadingTwo: { type: String },
  paragraphOne: { type: String },
  paragraphTwo: { type: String },
  imageLink: { type: String },
  imageCaption: { type: String },
  author: { type: String },
  published: { type: String }
});

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema);

export default Blog;