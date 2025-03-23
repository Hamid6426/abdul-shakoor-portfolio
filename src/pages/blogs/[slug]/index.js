import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from '@/utils/axiosConfig';

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blogs/slug/${slug}`);
        setBlog(response.data);
      } catch (error) {
        setError("Failed to load blog");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Refined Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="max-w-3xl mx-auto my-8 p-6 animate-pulse space-y-6">
      <div className="h-64 bg-gray-200 rounded-lg" />
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
      <div className="mt-8 space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full" />
        ))}
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto my-8 p-4">
        <div className="p-4 bg-red-100 text-red-700 border border-red-300 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-4">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        {/* Blog Thumbnail */}
        <div className="relative aspect-video">
          <img 
            src={blog?.thumbnail} 
            alt={blog?.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blog?.title}
          </h1>

          {/* Author and Date */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-sm text-gray-600 font-medium">
              By {blog?.author}
            </span>
            <span className="text-gray-400">•</span>
            <time className="text-sm text-gray-500">
              {new Date(blog?.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Excerpt */}
          {blog?.excerpt && (
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-700 italic">
                {blog?.excerpt}
              </p>
            </div>
          )}

          {/* Full Content */}
          <div className="prose max-w-none text-gray-800">
            {blog?.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
