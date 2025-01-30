import { Client } from '@vercel/postgres';

class MailRepository {
  constructor() {
    this.client = new Client();
  }

  async connect() {
    await this.client.connect();
  }

  async disconnect() {
    await this.client.end();
  }

  async createMail(mailData) {
    await this.connect();
    try {
      const { firstName, lastName, email, subject, message } = mailData;
      const now = new Date().toISOString();
      await this.client.query(
        'INSERT INTO mail (first_name, last_name, email, subject, message, send_at) VALUES ($1, $2, $3, $4, $5, $6)',
        [firstName, lastName, email, subject, message, now]
      );
      console.log("Mail entry created successfully:", mailData);
    } finally {
      await this.disconnect();
    }
  }

  async getAllMails() {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM mail');
      return res.rows;
    } finally {
      await this.disconnect();
    }
  }

  async getMail(id) {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM mail WHERE id = $1', [id]);
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async deleteMail(id) {
    await this.connect();
    try {
      await this.client.query('DELETE FROM mail WHERE id = $1', [id]);
      console.log("Mail entry deleted successfully:", id);
    } finally {
      await this.disconnect();
    }
  }
}

export default MailRepository;
