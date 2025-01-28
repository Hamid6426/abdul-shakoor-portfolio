import Mail, { IMail } from '../models/Mail';

export const createMail = async (mailData: Partial<IMail>): Promise<IMail> => {
  const mail = new Mail(mailData);
  return await mail.save();
};

export const getMailById = async (id: string): Promise<IMail | null> => {
  return await Mail.findById(id);
};

export const getAllMails = async (): Promise<IMail[]> => {
  return await Mail.find();
};

export const updateMail = async (id: string, updateData: Partial<IMail>): Promise<IMail | null> => {
  return await Mail.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteMail = async (id: string): Promise<IMail | null> => {
  return await Mail.findByIdAndDelete(id);
};
