import connectDB from '@/lib/config/db';
import bcrypt from 'bcrypt';

class AdminRepository {
  constructor() {
    this.client = connectDB(); // Neon serverless client
  }

  async registerAdmin(adminData) {
    try {
      const { fullName, email, password } = adminData;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const admin = await this.client`
        INSERT INTO admin (full_name, email, password)
        VALUES (${fullName}, ${email}, ${hashedPassword})
        RETURNING *;
      `;
      console.log('Admin successfully registered in DB:', admin); // Debug log
      return admin[0];
    } catch (err) {
      console.error('Error in registerAdmin:', err); // Error log
      throw err;
    }
  }

  async loginAdmin(email, password) {
    try {
      const [admin] = await this.client`
        SELECT * FROM admin WHERE email = ${email};
      `;
      if (admin && await bcrypt.compare(password, admin.password)) {
        return admin;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      console.error('Error in loginAdmin:', err); // Error log
      throw err;
    }
  }

  async getAllAdmins() {
    const admins = await this.client`
      SELECT * FROM admin;
    `;
    return admins;
  }

  async getAdmin(id) {
    const [admin] = await this.client`
      SELECT * FROM admin WHERE id = ${id};
    `;
    return admin;
  }

  async updateAdmin(id, adminData) {
    const { fullName, email, password } = adminData;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const [updatedAdmin] = await this.client`
      UPDATE admin
      SET full_name = ${fullName}, email = ${email}, password = ${hashedPassword}
      WHERE id = ${id}
      RETURNING *;
    `;
    return updatedAdmin;
  }

  async patchAdmin(id, updateData) {
    let query = 'UPDATE admin SET ';
    const values = [];
    Object.keys(updateData).forEach((key, index) => {
      query += `${key} = $${index + 1}, `;
      values.push(updateData[key]);
    });
    query = query.slice(0, -2); // Remove trailing comma and space
    query += ` WHERE id = $${values.length + 1} RETURNING *`;
    values.push(id);
    const [updatedAdmin] = await this.client.unsafe(query, ...values);
    return updatedAdmin;
  }

  async deleteAdmin(id) {
    await this.client`
      DELETE FROM admin WHERE id = ${id};
    `;
  }
}

export default AdminRepository;
