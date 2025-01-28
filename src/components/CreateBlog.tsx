import { useState } from 'react';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    mainHeading: '',
    subHeadingOne: '',
    subHeadingTwo: '',
    paragraphOne: '',
    paragraphTwo: '',
    imageLink: '',
    imageCaption: '',
    published: false,
    author: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Creating blog post...');

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Blog post created successfully!');
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus('Something went wrong, please try again later.');
    }
  };

  return (
    <div>
      <h1>Create a Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <textarea
          name="mainHeading"
          placeholder="Main Heading"
          value={formData.mainHeading}
          onChange={handleChange}
        />
        <textarea
          name="paragraphOne"
          placeholder="Paragraph One"
          value={formData.paragraphOne}
          onChange={handleChange}
        />
        <textarea
          name="paragraphTwo"
          placeholder="Paragraph Two"
          value={formData.paragraphTwo}
          onChange={handleChange}
        />
        <button type="submit">Create Blog Post</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default CreateBlog;
