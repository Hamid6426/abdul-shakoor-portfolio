import React, { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import useFetchBlogs from '../../hooks/useFetchBlogs';
import BlogCreateModal from '../../components/modals/BlogCreateModal';
import BlogUpdateModal from '../../components/modals/BlogUpdateModal';
import BlogDeleteButton from '../../components/buttons/BlogDeleteButton';
import BlogCard from '../../components/cards/BlogCard';

const AdminManageBlogsPage = () => {
  const { blogs, loading, error } = useFetchBlogs();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openUpdateModal = (blogId) => {
    setCurrentBlogId(blogId);
    setIsUpdateModalOpen(true);
  };
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const handleReload = () => {
    window.location.reload();
  };

  if (loading) return <AdminLayout>Loading...</AdminLayout>;
  if (error) return <AdminLayout>Error: {error.message}</AdminLayout>;

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Manage Blogs</h1>
        <button onClick={openCreateModal} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Create New Blog</button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogs.map(blog => (
            <div key={blog._id} className="relative">
              <BlogCard
                title={blog.title}
                thumbnail={blog.thumbnail}
                excerpt={blog.excerpt}
                onClick={() => openUpdateModal(blog._id)}
              />
              <BlogDeleteButton blogId={blog._id} onDeleteSuccess={handleReload} />
            </div>
          ))}
        </div>
        {isCreateModalOpen && <BlogCreateModal onSuccess={closeCreateModal} onClose={closeCreateModal} />}
        {isUpdateModalOpen && <BlogUpdateModal blogId={currentBlogId} onSuccess={closeUpdateModal} onClose={closeUpdateModal} />}
      </div>
    </AdminLayout>
  );
};

export default AdminManageBlogsPage;
