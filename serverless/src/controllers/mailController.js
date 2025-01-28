const mailService = require('../services/mailService');

const createMail = async (req, res) => {
  try {
    const mail = await mailService.createMail(req.body);
    res.status(201).json(mail);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMails = async (req, res) => {
  try {
    const mails = await mailService.getAllMails();
    res.json(mails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMailById = async (req, res) => {
  try {
    const mail = await mailService.getMailById(req.params.id);
    if (!mail) {
      return res.status(404).json({ message: 'Mail not found' });
    }
    res.json(mail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMail = async (req, res) => {
  try {
    const deletedMail = await mailService.deleteMail(req.params.id);
    if (!deletedMail) {
      return res.status(404).json({ message: 'Mail not found' });
    }
    res.json({ message: 'Mail deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMail,
  getAllMails,
  getMailById,
  deleteMail
};
