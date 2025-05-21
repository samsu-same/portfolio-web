// components/Blog.jsx
import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 Tips for Writing Clean Code",
      excerpt: "Learn how to write maintainable and efficient code with these practical tips.",
      link: "#",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      excerpt: "A beginner's guide to understanding and using React Hooks effectively.",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-8">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href={post.link} className="text-blue-500 hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;