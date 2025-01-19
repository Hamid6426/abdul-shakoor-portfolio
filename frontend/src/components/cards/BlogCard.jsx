import React from 'react';

const BlogCard = ({ title, thumbnail, excerpt }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{excerpt}</p>
        <a href={`/blogs/${title}`} className="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default BlogCard;
