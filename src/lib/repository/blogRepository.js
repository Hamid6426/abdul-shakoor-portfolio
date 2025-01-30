import { Client } from '@vercel/postgres';

class BlogRepository {
  constructor() {
    this.client = new Client();
  }

  async connect() {
    await this.client.connect();
  }

  async disconnect() {
    await this.client.end();
  }

  async createBlog(blogData) {
    await this.connect();
    try {
      const { title, thumbnail, excerpt, content, author } = blogData;

      // Function to create a slug from the title
      const createSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      };

      const slug = createSlug(title);
      const now = new Date().toISOString();
      await this.client.query(
        'INSERT INTO blog (title, thumbnail, excerpt, content, slug, author, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [title, thumbnail, excerpt, content, slug, author, now, now]
      );
      console.log("Blog entry created successfully:", blogData);
    } finally {
      await this.disconnect();
    }
  }

  async getAllBlogs() {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM blog');
      return res.rows;
    } finally {
      await this.disconnect();
    }
  }

  async getBlog(id) {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM blog WHERE id = $1', [id]);
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async getBlogBySlug(slug) {
    await this.connect();
    try {
      const res = await this.client.query('SELECT * FROM blog WHERE slug = $1', [slug]);
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async updateBlogById(id, blogData) {
    await this.connect();
    try {
      const { title, thumbnail, excerpt, content, author } = blogData;

      // Function to create a slug from the title
      const createSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      };

      const slug = createSlug(title);
      const now = new Date().toISOString();
      const res = await this.client.query(
        'UPDATE blog SET title = $1, thumbnail = $2, excerpt = $3, content = $4, slug = $5, author = $6, updated_at = $7 WHERE id = $8 RETURNING *',
        [title, thumbnail, excerpt, content, slug, author, now, id]
      );
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async updateBlogBySlug(slug, blogData) {
    await this.connect();
    try {
      const { title, thumbnail, excerpt, content, author } = blogData;

      // Function to create a slug from the title
      const createSlug = (title) => {
        return title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      };

      const newSlug = createSlug(title);
      const now = new Date().toISOString();
      const res = await this.client.query(
        'UPDATE blog SET title = $1, thumbnail = $2, excerpt = $3, content = $4, slug = $5, author = $6, updated_at = $7 WHERE slug = $8 RETURNING *',
        [title, thumbnail, excerpt, content, newSlug, author, now, slug]
      );
      return res.rows[0];
    } finally {
      await this.disconnect();
    }
  }

  async patchBlog(id, updateData) {
    await this.connect();
    try {
      let query = 'UPDATE blog SET ';
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

  async deleteBlog(id) {
    await this.connect();
    try {
      await this.client.query('DELETE FROM blog WHERE id = $1', [id]);
      console.log("Blog entry deleted successfully:", id);
    } finally {
      await this.disconnect();
    }
  }
}

export default BlogRepository;
