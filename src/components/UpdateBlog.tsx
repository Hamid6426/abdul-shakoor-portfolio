import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UpdateBlog = () => {
  const router = useRouter();
  const { id } = router.query;
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

  useEffect(() => {
    if (id) {
      fetchBlogData(id as string);
    }
  }, [id]);

  const fetchBlogData = async (blogId: string) => {
    try {
      const response = await fetch(`/api/blog/${blogId}`);
      const data = await response.json();
      if (data.success) {
        setFormData(data.data); // Fill form with current blog data
      } else {
        setStatus('Blog post not found.');
      }
    } catch (error) {
      setStatus('Error fetching blog data.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Updating blog post...');

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Blog post updated successfully!');
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus('Something went wrong, please try again later.');
    }
  };

  return (
    <div>
      <h1>Update Blog Post</h1>
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
        <input
          type="text"
          name="imageLink"
          placeholder="Image Link"
          value={formData.imageLink}
          onChange={handleChange}
        />
        <input
          type="text"
          name="imageCaption"
          placeholder="Image Caption"
          value={formData.imageCaption}
          onChange={handleChange}
        />
        <button type="submit">Update Blog Post</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default UpdateBlog;
