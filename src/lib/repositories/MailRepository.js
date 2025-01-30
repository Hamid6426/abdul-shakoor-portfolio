import connectDB from '@/lib/config/db';

class MailRepository {
  constructor() {
    this.client = connectDB(); // Neon serverless client
  }

  async createMail(mailData) {
    const { firstName, lastName, email, subject, message } = mailData;
    const now = new Date().toISOString();
    await this.client`
      INSERT INTO mail (first_name, last_name, email, subject, message, send_at)
      VALUES (${firstName}, ${lastName}, ${email}, ${subject}, ${message}, ${now});
    `;
    console.log("Mail entry created successfully:", mailData);
  }

  async getAllMails() {
    const mails = await this.client`
      SELECT * FROM mail;
    `;
    return mails;
  }

  async getMail(id) {
    const [mail] = await this.client`
      SELECT * FROM mail WHERE id = ${id};
    `;
    return mail;
  }

  async deleteMail(id) {
    await this.client`
      DELETE FROM mail WHERE id = ${id};
    `;
    console.log("Mail entry deleted successfully:", id);
  }
}

export default MailRepository;
