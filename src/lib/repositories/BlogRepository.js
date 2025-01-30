import connectDB from '@/lib/config/db';

class BlogRepository {
  constructor() {
    this.client = connectDB(); // Neon serverless client
  }

  async createBlog(blogData) {
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
    await this.client`
      INSERT INTO blog (title, thumbnail, excerpt, content, slug, author, created_at, updated_at)
      VALUES (${title}, ${thumbnail}, ${excerpt}, ${content}, ${slug}, ${author}, ${now}, ${now});
    `;
    console.log("Blog entry created successfully:", blogData);
  }

  async getAllBlogs() {
    const blogs = await this.client`
      SELECT * FROM blog;
    `;
    return blogs;
  }

  async getBlog(id) {
    const [blog] = await this.client`
      SELECT * FROM blog WHERE id = ${id};
    `;
    return blog;
  }

  async getBlogBySlug(slug) {
    const [blog] = await this.client`
      SELECT * FROM blog WHERE slug = ${slug};
    `;
    return blog;
  }

  async updateBlogById(id, blogData) {
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
    const [updatedBlog] = await this.client`
      UPDATE blog
      SET title = ${title}, thumbnail = ${thumbnail}, excerpt = ${excerpt}, content = ${content},
          slug = ${slug}, author = ${author}, updated_at = ${now}
      WHERE id = ${id}
      RETURNING *;
    `;
    return updatedBlog;
  }

  async updateBlogBySlug(slug, blogData) {
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
    const [updatedBlog] = await this.client`
      UPDATE blog
      SET title = ${title}, thumbnail = ${thumbnail}, excerpt = ${excerpt}, content = ${content},
          slug = ${newSlug}, author = ${author}, updated_at = ${now}
      WHERE slug = ${slug}
      RETURNING *;
    `;
    return updatedBlog;
  }

  async patchBlog(id, updateData) {
    let query = 'UPDATE blog SET ';
    const values = [];
    Object.keys(updateData).forEach((key, index) => {
      query += `${key} = $${index + 1}, `;
      values.push(updateData[key]);
    });
    query = query.slice(0, -2); // Remove trailing comma and space
    query += ` WHERE id = $${values.length + 1} RETURNING *`;
    values.push(id);
    const [updatedBlog] = await this.client.unsafe(query, ...values);
    return updatedBlog;
  }

  async deleteBlog(id) {
    await this.client`
      DELETE FROM blog WHERE id = ${id};
    `;
    console.log("Blog entry deleted successfully:", id);
  }
}

export default BlogRepository;
