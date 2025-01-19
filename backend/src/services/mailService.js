const Mail = require('../models/Mail');

const createMail = async (mailData) => {
  const mail = new Mail(mailData);
  await mail.save();
  return mail;
};

const getAllMails = async () => {
  return await Mail.find();
};

const getMailById = async (id) => {
  return await Mail.findById(id);
};

const deleteMail = async (id) => {
  return await Mail.findByIdAndDelete(id);
};

module.exports = {
  createMail,
  getAllMails,
  getMailById,
  deleteMail
};
