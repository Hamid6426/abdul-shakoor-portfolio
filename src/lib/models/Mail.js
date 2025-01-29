const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  sendAt: { type: Date, default: Date.now }
});

let Mail;

if (mongoose.models.Mail) {
  Mail = mongoose.model('Mail');
} else {
  Mail = mongoose.model('Mail', mailSchema);
}

module.exports = Mail;
