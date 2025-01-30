import connectDB from '@/lib/config/db';
import bcrypt from 'bcrypt';

class AdminRepository {
  constructor() {
    this.db = connectDB;
  }

  async registerAdmin(adminData) {
    await this.connect();
    try {
      const { fullName, email, password } = adminData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      await this.client.query(
        'INSERT INTO admin (full_name, email, password) VALUES ($1, $2, $3)',
        [fullName, email, hashedPassword]
      );
    } finally {
      await this.disconnect();
    }
  }

  async loginAdmin(email, password) {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM admin WHERE email = $1', [email]);
      const admin = res.rows[0];
      if (admin && (await bcrypt.compare(password, admin.password))) {
        return admin;
      } else {
        throw new Error('Invalid credentials');
      }
    } finally {
      await this.disconnect();
    }
  }

  async getAllAdmins() {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM admin');
      return res.rows;
    } finally {
      await this.disconnect();
    }
  }

  async getAdmin(id) {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM admin WHERE id = $1', [id]);
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async updateAdmin(id, adminData) {
    await this.connect();
    try {
      const { fullName, email, password } = adminData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const res = await this.client.query(
        'UPDATE admin SET full_name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
        [fullName, email, hashedPassword, id]
      );
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async patchAdmin(id, updateData) {
    await this.connect();
    try {
      let query = 'UPDATE admin SET ';
      const values = [];
      Object.keys(updateData).forEach((key, index) => {
        query += `${key} = $${index + 1}, `;
        values.push(updateData[key]);
      });
      query = query.slice(0, -2); // Remove trailing comma and space
      query += ' WHERE id = $' + (values.length + 1) + ' RETURNING *';
      values.push(id);
      const res = await this.client.query(query, values);
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async deleteAdmin(id) {
    await this.connect();
    try {
      await this.client.query('DELETE FROM admin WHERE id = $1', [id]);
    } finally {
      await this.disconnect();
    }
  }
}

export default AdminRepository;
