import { connectDB, disconnectDB } from './../config/db';
import Mail from '../models/Mail';

export const createMail = async (mailData) => {
  await connectDB();
  try {
    const mail = new Mail(mailData);
    await mail.save();
    return mail;
  } finally {
    await disconnectDB();
  }
};

export const getAllMails = async () => {
  await connectDB();
  try {
    const mails = await Mail.find();
    return mails;
  } finally {
    await disconnectDB();
  }
};

export const getMailById = async (id) => {
  await connectDB();
  try {
    const mail = await Mail.findById(id);
    return mail;
  } finally {
    await disconnectDB();
  }
};

export const getMailByIdAndUpdate = async (id, mailData) => {
  await connectDB();
  try {
    const mail = await Mail.findByIdAndUpdate(id, mailData, { new: true });
    return mail;
  } finally {
    await disconnectDB();
  }
};

export const getMailByIdAndDelete = async (id) => {
  await connectDB();
  try {
    await Mail.findByIdAndDelete(id);
  } finally {
    await disconnectDB();
  }
};
