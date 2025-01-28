const mongoose = require('mongoose');

// Function to create a slug from the title
const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

blogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  
  // Set slug before saving if it doesn't exist
  if (!this.slug) {
    this.slug = createSlug(this.title);
  }

  next();
});

let Blog;

if (mongoose.models.Blog) {
  Blog = mongoose.model('Blog');
} else {
  Blog = mongoose.model('Blog', blogSchema);
}

module.exports = Blog;
